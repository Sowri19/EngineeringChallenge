import express, { Request, Response } from "express";
import admin from "./firebaseConfig"; // Import admin from firebaseConfig
import { getMachineHealth } from "./machineHealth";

const app = express();
const port = 3001;

app.use(express.json()); // Middleware for JSON request parsing

app.post("/machine-health", async (req: Request, res: Response) => {
  const uid = req.body.uid;
  const result = getMachineHealth(req);
  const timestamp = new Date().toISOString();

  if (result.error) {
    res.status(400).json(result);
  } else {
    const db = admin.firestore();
    const docRef = db.collection("machineHealthRecords").doc();
    try {
      // Include the UID and timestamp in the data being saved
      await docRef.set({ ...result, uid, timestamp });
      console.log(
        "Machine health data written with ID: ",
        docRef.id,
        ", UID: ",
        uid,
        " at ",
        timestamp
      );
      res.json({ ...result, uid, timestamp });
    } catch (error) {
      console.error("Unhandled error in /machine-health endpoint:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
