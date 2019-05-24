const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.send("Binary Studio Hometask - API server for Fighters");
});

module.exports = router;
