const express = require("express");
const { CreateUser, LoginUser } = require("../controllers/authController");
const router = express.Router();

router.post("/create-user", CreateUser);
router.post("/login-user", LoginUser);

module.exports = router;
