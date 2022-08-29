const { ethFaucet } = require("../controller/ethFaucetController");
const express = require("express");
const router = express.Router();

router.post("/", ethFaucet);

module.exports = router;
