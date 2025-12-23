// const Resume = require("../models/resumeSchema");
async function handleCreateResume(req, res) {
  try {
    if (req.body.skills && typeof req.body.skills === "string") {
      req.body.skills = req.body.skills.split(",");
    }
    console.log(req.body);
    // const resume = await Resume.create(req.body);
    // console.log(resume);

    return res.render("resumeView", {resume:req.body});
  } catch (err) {
    console.error("Error creating resume:", err);
    return res.send("Error creating resume");
  }
}
async function showForm(req, res) {
  res.render("resumeForm");
}
module.exports = {
  handleCreateResume,
  showForm,
};
