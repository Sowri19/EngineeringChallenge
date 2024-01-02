import express, { Request, Response } from "express";
import admin from "./firebaseConfig";
import { getMachineHealth } from "./machineHealth";

const app = express();
const port = 3001;

app.use(express.json());

app.post("/machine-health", async (req: Request, res: Response) => {
  const uid = req.body.uid;
  const result = getMachineHealth(req);
  const timestamp = new Date().toISOString();

  if (result.error) {
    res.status(400).json(result);
    return;
  }

  const db = admin.firestore();
  const userDocRef = db.collection("machineHealthRecords").doc(uid);

  try {
    await userDocRef.set(
      {
        records: admin.firestore.FieldValue.arrayUnion({
          ...result,
          timestamp,
        }),
      },
      { merge: true }
    );
    res.json({ ...result, uid, timestamp });
  } catch (error) {
    console.error("Unhandled error in /machine-health endpoint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/machine-health/:uid", async (req: Request, res: Response) => {
  const uid = req.params.uid;
  if (!uid) {
    res.status(400).json({ error: "UID is required" });
    return;
  }

  const db = admin.firestore();
  const userDocRef = db.collection("machineHealthRecords").doc(uid);

  try {
    const doc = await userDocRef.get();

    if (!doc.exists) {
      res.status(404).json({
        error: "No machine health records found for the provided UID",
      });
      return;
    }

    const userData = doc.data();
    res.json(userData?.records || []);
  } catch (error) {
    console.error("Error fetching machine health data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a new route to handle DELETE requests for deleting data
app.delete("/machine-health/delete-data/:uid", async (req, res) => {
  const uid = req.params.uid;

  try {
    // Delete data in Firebase Firestore
    const db = admin.firestore();
    const userDocRef = db.collection("machineHealthRecords").doc(uid);

    // Delete the document with the specified UID
    await userDocRef.delete();

    // Send a success response
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data in Firebase:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
