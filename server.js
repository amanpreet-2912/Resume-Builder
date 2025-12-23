const express = require("express");
const app = express();
// const dotenv = require("dotenv");
// const Demo=require("./models/testModel")
// const connectDB=require("./connection")
const resumeRouter=require("./routes/resume")
// const ResumeModel=require("./models/resumeSchema")
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views","./views")

// dotenv.config();
// connectDB(process.env.MONGODB_URL);
app.use('/',resumeRouter)
// app.get("/demo", async (req, res) => {
//   await Demo.create({ name: "Hello mongo" });
//   console.log(Demo)
//   console.log(ResumeModel)
//   res.send("user created");
// });

app.listen(8000, () => {
  console.log("server started at port 8000");
});