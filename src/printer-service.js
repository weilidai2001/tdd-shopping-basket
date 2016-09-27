const _ = require('lodash');

module.exports = function(priceCalculatorService) {
  this.generateReceiptAsString = function(basket) {
    const itemisedList = _(basket.getItemsInBasket())
      .countBy('name')
      .map((quantity, name) => `${name} x ${quantity} £${priceCalculatorService.calculateSubtotalByItem(name, quantity).toFixed(2)}`)
      .value();

    const linebreak = "------------";

    const discount = `discount: -£${priceCalculatorService.calculateTotalDiscount(basket).toFixed(2)}`;

    const total = `total: £${priceCalculatorService.calculateTotalPrice(basket).toFixed(2)}`;

    return itemisedList
      .concat([linebreak])
      .concat([discount])
      .concat([total])
      .join("\n");
  }
};
