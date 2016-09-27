const Basket = function(priceCalculator) {
  const itemsInBasket = [];

  this.addItemToBasket = item => itemsInBasket.push(item);

  this.countItemsByType = name => itemsInBasket.filter(item => item.name == name).length;

  this.getItemsInBasket = () => itemsInBasket;

  this.calculateTotalPrice = () => priceCalculator.calculateTotalPrice(this);
};

module.exports = Basket;