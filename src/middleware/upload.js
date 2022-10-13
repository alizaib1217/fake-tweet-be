const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extensionList = ["image/jpeg", "image/png", "pdf"];
    const { mimetype } = file;
    if (extensionList.indexOf(mimetype) == -1) {
      return;
    } else {
      cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
    }
  },
});

const upload = multer({ storage: storage });
exports.uploadFileBucket = upload;
