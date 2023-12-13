import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const date = Date.now();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const extensionName = path.extname(file.originalname);
    // console.log(extensionName);//comes with . i.e .jpg
    cb(null, file.fieldname + "-" + uniqueSuffix + extensionName);
  },
});

export const upload = multer({ storage: storage });
