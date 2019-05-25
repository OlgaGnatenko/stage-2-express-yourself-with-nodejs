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
  const { fighters, winner, dateTime } = newFight;
  if (!(fighters && winner && dateTime)) {
    return {
      ok,
      error: "Incorrect data format"
    };
  }
  const _id = fights.length + 1;
  const fight = {
    _id,
    fighters,
    winner,
    dateTime
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
