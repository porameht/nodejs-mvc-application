//js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);
const session = require("express-session");

// connect mongodb

const database = process.env.DB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
// body parsing
app.use(express.urlencoded({ extended: false }));

// initialize a session
app.use(
  session({
    secret: "oneboy",
    saveUninitialized: true,
    resave: true,
  })
);

// middleware passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/", require("./routes/login"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server on start for port: " + PORT));
