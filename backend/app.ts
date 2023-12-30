// Import necessary modules
import express, { Request, Response } from "express";
import admin from "./firebaseConfig"; // Import admin from firebaseConfig
import { getMachineHealth } from "./machineHealth";

const app = express();
const port = 3001;

app.use(express.json()); // Middleware for JSON request parsing

app.post("/machine-health", async (req: Request, res: Response) => {
  const result = getMachineHealth(req);
  if (result.error) {
    res.status(400).json(result);
  } else {
    const db = admin.firestore();
    const docRef = db.collection("machineHealthRecords").doc();
    try {
      await docRef.set(result);
      console.log("Machine health data written with ID: ", docRef.id);
      res.json(result);
    } catch (error) {
      console.error("Error writing machine health data to Firebase:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
