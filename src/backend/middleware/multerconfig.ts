import multer from "multer";
import path from "path";
import fs from "fs";

// Tentukan path folder 'uploads' di luar 'src/'
const uploadsDir = path.join(__dirname, "../uploads");
// Pastikan folder 'uploads' ada
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = uniqueSuffix + path.extname(file.originalname);
    console.log(`File saved as: ${fileName}`); // Verifikasi nama file yang disimpan
    cb(null, fileName);
  },
});


const upload = multer({ storage });

export default upload;
