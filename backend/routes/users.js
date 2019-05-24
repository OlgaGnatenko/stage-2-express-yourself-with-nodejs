const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser
} = require("../services/user.service");

router.get("/", function(req, res) {
  const users = getAllUsers();
  if (users) {
    res.status(200).send(users);
  } else {
    res.status(500).send("Error getting user list");
  }
});

router.get("/:id", function(req, res) {
  const user = getUserById(req.params.id);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(400).send(`User with id=${req.params.id} not found.`);
  }
});

router.post("/", function(req, res) {
  const user = addUser(req.body);
  if (user) {
    res.status(201).send(user);
  } else {
    res.status(500).send("Error: cannot add user");
  }
});

router.put("/", function(req, res) {
  const result = updateUser(req.body);
  if (result.ok) {
    res.status(200).send(result.data);
  }
  res.status(400).send(result.error);
});

module.exports = router;
