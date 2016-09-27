const prices = {
  "apple": 0.25,
  "orange": 0.3,
  "garlic": 0.15,
  "papaya": 0.5
};

module.exports = {
  getPriceByItemName: name => prices[name]
};