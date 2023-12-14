import express from "express";
import "dotenv/config";
import { upload } from "./middleware/uploader.js";

const app = express();

//upload.single lai callback ma halera trigger error
const logoUpload = upload.single("image");
app.post("/test/upload", (req, res) => {
  logoUpload(req, res, (err) => {
    if (err) {
      // console.log(err);

      return res.status(400).send({ error: "invalid file" });
    }
    //when no error
    // console.log("save the file", req.file);
    return res.send("file uploaded successfully");
  });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port:: ${port}`);
});
