const mongoose = require("mongoose");

module.exports.ConnectDB = () => {
  // MongoDB Connection
  const DB_URI =
    "mongodb+srv://smshoaib2001:job_portal@cluster0.aomxapu.mongodb.net/Job_PortalretryWrites=true&w=majority";
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => console.log("Connected to MongoDB"));
};
