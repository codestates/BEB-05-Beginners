const { userinfo } = require("../controller/userinfoController");
const express = require("express");
const router = express.Router();

router.get("/", userinfo);

module.exports = router;
