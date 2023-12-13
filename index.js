import express from "express";
import "dotenv/config";
import { upload } from "./middleware/uploader.js";

const app = express();

app.post("/test/upload", upload.single("image"), (req, res) => {
  res.send("uploaded successfully");
});

//buffer ma upload gara
//buffer ko image lai base64 encode gara=>convert to blob
//upload blob
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port:: ${port}`);
});
