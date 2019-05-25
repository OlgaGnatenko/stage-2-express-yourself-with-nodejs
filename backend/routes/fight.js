const express = require("express");
const router = express.Router();

const { getAllFights, addFight } = require("../services/fight.service");

router.get("/", function(req, res) {
  const fights = getAllFights();
  if (fights) {
    res.status(200).send(fights);
  } else {
    res.status(500).send("Error getting fights list");
  }
});

router.post("/", function(req, res) {
  const result = addFight(req.body);
  if (result.ok) {
    res.status(201).send(result.data);
  }
  res.status(400).send(`Cannot add fight: ${result.error}`);
});

module.exports = router;
