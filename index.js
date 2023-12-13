import express from "express";
import "dotenv/config";
import { upload } from "./middleware/uploader.js";

const app = express();

//upload.single lai callback ma halera trigger error
const logoUpload = upload.single("image");
app.post("/test/upload", (req, res) => {
  logoUpload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(403).send({ error: "invalid file" });
    }
    //when no error
    // console.log("save the file", req.file);
    res.send("file uploaded successfully");
  });
});
// app.post("/test/upload", upload.single("image"), (err, req, res) => {
//   if (err) {
//     res.status(400).send(err.message);
//   } else {
//     res.send("uploaded successfully");
//   }
// });

//buffer ma upload gara
//buffer ko image lai base64 encode gara=>convert to blob
//upload blob
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port:: ${port}`);
});
