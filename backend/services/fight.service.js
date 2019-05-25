let fights = [];

const getAllFights = () => {
  if (fights) {
    return fights;
  } else {
    return null;
  }
};

const addFight = newFight => {
  let ok = false;
  const { fighters, winner } = newFight;
  if (!(fighters && winner)) {
    return {
      ok,
      error: "Incorrect data format"
    };
  }
  const fight = {
    fighters,
    winner
  };
  fights.push(fight);
  return {
    ok: true,
    data: fight
  };
};

module.exports = {
  getAllFights,
  addFight
};
