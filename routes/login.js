//js
const express = require("express");
const {
  registerView,
  loginView,
  registerUser,
  loginUser,
} = require("../controllers/loginController");
const { dashboardView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express();

// get
router.get("/register", registerView);
router.get("/login", loginView);
// dashboard
router.get("/dashboard", protectRoute, dashboardView);

// post
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
