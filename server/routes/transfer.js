const { transfer } = require("../controller/transferController");
const express = require("express");
const router = express.Router();

router.post("/", transfer);

module.exports = router;
