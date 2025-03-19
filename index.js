import express from "express";
import multer from "multer";
import { storage } from "./config/multer.js";

const app = express();
const upload = multer({ storage, limits: { fileSize: 1024000 } });
const PORT = 3000;

// app.use(express.urlencoded({extended: true}))
app.use(upload.single("image"));

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.post("/form", (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("Form received");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost${PORT}`);
});
