const multer = require("multer");
const path = require("path");

const fileStorage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "");
  },
  filename: (req, file, cb) => {
    cb(null, "_" + new Date().getTime());
  },
});

module.exports = multer({
  storage: fileStorage,
});
