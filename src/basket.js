const itemPriceList = require("./items-price-list");

const Basket = function() {
  const itemsInBasket = [];

  this.addItemToBasket = item => itemsInBasket.push(item);

  this.calculateTotalPrice = () => itemsInBasket
    .map(item => itemPriceList.getPriceByItemName(item.name))
    .reduce((previous, current) => previous + current);
};

module.exports = Basket;