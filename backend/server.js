import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 10000; // Render uses dynamic ports

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Corrected path — must point to frontend1/dist
app.use(express.static(path.join(__dirname, "../frontend1/dist")));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend1/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
