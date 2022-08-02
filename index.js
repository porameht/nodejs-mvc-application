//js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// connect mongodb
dotenv.config();
const database = process.env.DB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// body parsing
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
//Routes
app.use("/", require("./routes/login"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server on start for port: " + PORT));
