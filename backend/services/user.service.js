const fs = require("fs");

const { saveData } = require("../repositories/user.repository");

let users = [];

const getDefaultUsersList = () => {
  const jsonContent = fs.readFileSync("./resources/userlist.json");
  const defaultList = JSON.parse(jsonContent);
  // ensure that users are sorted to make adding users more consistent and easy
  users = defaultList.sort((a, b) => a._id - b._id);
  return defaultList;
};

const getAllUsers = () => {
  if (users && users.length) {
    return users;
  } else {
    return null;
  }
};

const getUserById = _id => {
  const targetUser = users.find(user => user._id === _id);
  return targetUser;
};

const addUser = newUser => {
  const { name, health, attack, defense, source } = newUser;
  const user = { name, health, attack, defense, source };
  const lastId = users[users.length - 1]._id;

  // todo: add verification that health, attack, defense is numeric, integer, >0
  // todo: add verification that source is an image
  // todo: add verification that name is not empty

  user._id = lastId + 1;
  users.push(user);
  return user;
};

const updateUser = user => {
  let ok = false;
  const { _id } = user;
  if (!_id) {
    return {
      ok,
      error: "Cannot update user: please provide _id"
    };
  }

  const userIndex = users.findIndex(user => user._id === _id);
  if (userIndex === -1) {
    return {
      ok,
      error: `User with id=${_id} not found`
    };
  }

  const keys = ["name", "health", "attack", "defense", "source"];
  keys.forEach(key => {
    if (user[key]) {
      users[userIndex][key] = user[key];
    }
  });

  return {
    ok: true,
    data: users[userIndex]
  };
};

module.exports = {
  getDefaultUsersList,
  getAllUsers,
  getUserById,
  addUser,
  updateUser
};
