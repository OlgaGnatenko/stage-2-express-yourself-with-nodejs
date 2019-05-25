const fs = require("fs");
const sanitizer = require("sanitize")(); // sanitize text values coming from client
const validUrl = require("valid-url"); // check if "source" field provided by client is valid

// const { saveData } = require("../repositories/user.repository");

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
  const sanitizedUser = sanitizeObject(newUser);
  const validationResult = validateUserFields(sanitizedUser);
  if (!validationResult.ok) {
    return validationResult;
  }
  const lastId = users[users.length - 1]._id;
  const _id = (parseInt(lastId) + 1).toString();
  const { name, health, attack, defense, source } = sanitizedUser;
  const user = { _id, name, health, attack, defense, source };
  users.push(user);
  return {
    ok: true,
    data: user
  };
};

const updateUser = (_id, user) => {
  const sanitizedUser = sanitizeObject(user);
  const validationResult = validateUserFields(sanitizedUser);
  if (!validationResult.ok) {
    return validationResult;
  }
  let ok = false;

  const userIndex = users.findIndex(user => user._id === _id);
  if (userIndex === -1) {
    return {
      ok,
      error: `User with id=${_id} not found`
    };
  }

  const keys = ["name", "health", "attack", "defense", "source"];
  keys.forEach(key => {
    if (sanitizedUser[key]) {
      users[userIndex][key] = user[key];
    }
  });

  return {
    ok: true,
    data: users[userIndex]
  };
};

const deleteUser = _id => {
  const userIndex = users.findIndex(user => user._id === _id);
  if (userIndex === -1) {
    return {
      ok: false,
      error: `User with id=${_id} not found`
    };
  }
  const deletedUser = users.splice(userIndex, 1)[0];
  return {
    ok: true,
    data: deletedUser
  };
};

const isPositiveInteger = value => {
  const num = parseFloat(value);
  if (isNaN(num) || !isFinite(num)) {
    return false;
  }
  if (num < 0) {
    return false;
  }
  if (Math.floor(num) === num) {
    return true;
  }
  return false;
};

const sanitizeObject = user => {
  return sanitizer.primitives(user);
};

const validateUserFields = user => {
  let ok = false;
  const { name, health, attack, defense, source } = user;
  const stats = { health, attack, defense };
  for (let key in stats) {
    if (!isPositiveInteger(stats[key])) {
      return {
        ok,
        error: `${key} should be a positive integer`
      };
    }
  }

  if (!name) {
    return {
      ok,
      error: "Name should be a non-empty string"
    };
  }

  if (!validUrl.isUri(source)) {
    return {
      ok,
      error: "Source should be a valid URL"
    };
  }

  return {
    ok: true,
    data: user
  };
};

module.exports = {
  getDefaultUsersList,
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};
