function handleCreateResume(req, res) {
  console.log(req.body);
  console.log(req.file);
      const { template, skills, ...rest } = req.body;
   const skillsArray = req.body.skills
    ? req.body.skills.split(","):[];

  const resumeData = {
    ...rest,
    skills: skillsArray,
    photo:req.file ? `/uploads/${req.file.filename}`:null,
  };

  return res.render(`templates/${template}`, {
      resume: resumeData
    });
}
async function showForm(req, res) {
  res.render("resumeForm");
}
module.exports = {
  handleCreateResume,
  showForm,
};
