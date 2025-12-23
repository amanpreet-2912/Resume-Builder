const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

const resumeRouter = require("./routes/resume");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/", resumeRouter);

app.listen(8000, () => {
  console.log("server started at port 8000");
});
