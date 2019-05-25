const fs = require("fs");

const saveData = (data) => {
    if (data) {
      console.log(`${data} is saved`);
      return data;
    } else {
      return false;
    }
  }
  
  module.exports = {
    saveData
  };