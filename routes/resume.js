const express = require("express");
const router = express.Router();
const Resume = require("../models/resumeSchema");
const {
  handleCreateResume,
  showForm,
} = require("../controllers/resume.controller");

router.get("/", (req, res) => {
  res.redirect("/form");
});
router.post("/create", handleCreateResume);
router.get("/form", showForm);

module.exports = router;
