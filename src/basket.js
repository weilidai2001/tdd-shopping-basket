const Basket = function(priceCalculator) {
  const itemsInBasket = [];

  this.addItemToBasket = item => itemsInBasket.push(item);

  this.getItemsInBasket = () => itemsInBasket;

  this.calculateTotalPrice = () => priceCalculator.calculateTotalPrice(this);
};

module.exports = Basket;