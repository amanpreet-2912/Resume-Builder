const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { handleCreateResume, showForm } = require("../controllers/resume.controller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only images allowed"));
    }
  }
});

router.get("/", showForm);

router.post("/create", upload.single("photo"), handleCreateResume);

module.exports = router;
