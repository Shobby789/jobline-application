const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { ConnectDB } = require("./model/connection");
app.use(express.json());
app.use(cors());
ConnectDB();

app.use("/auth/api", require("./routes/authRoutes"));

app.listen(1000, () => {
  console.log("Server running on port 1000");
});
