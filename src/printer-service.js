const _ = require('lodash');

module.exports = function(priceCalculatorService) {
  this.generateReceiptAsString = function(basket) {
    const itemisedList = _(basket.getItemsInBasket())
      .countBy('name')
      .map((quantity, name) => `${name} x ${quantity}`)
      .value();

    const linebreak = "------------";

    const total = `total: £${priceCalculatorService.calculateTotalPrice(basket).toFixed(2)}`;

    return itemisedList
      .concat([linebreak])
      .concat([total])
      .join("\n");
  }
};
