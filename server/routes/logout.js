const { logout } = require("../controller/logoutController");
const express = require("express");
const router = express.Router();

router.post("/", logout);

module.exports = router;
