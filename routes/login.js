//js
const express = require("express");
const {
  registerView,
  loginView,
  registerUser,
} = require("../controllers/loginController");
const router = express();

// get
router.get("/register", registerView);
router.get("/login", loginView);

// post
router.post("/register", registerUser);

module.exports = router;
