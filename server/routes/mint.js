const { mint } = require("../controller/mintController");
const express = require("express");
const router = express.Router();

router.post("/", mint);

module.exports = router;
