const express = require("express");
const {
  authCheck,
  login,
  logout,
  signup,
} = require("@controllers/auth.controller.js");
const protectRoute = require("../middleware/protectRoute.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/authCheck", protectRoute, authCheck);

module.exports = router;
