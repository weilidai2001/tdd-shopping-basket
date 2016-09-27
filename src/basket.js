const Basket = function() {
  const itemsInBasket = [];

  this.addItemToBasket = item => itemsInBasket.push(item);

  this.countItemsByType = name => itemsInBasket.filter(item => item.name == name).length;

  this.getItemsInBasket = () => itemsInBasket;
};

module.exports = Basket;