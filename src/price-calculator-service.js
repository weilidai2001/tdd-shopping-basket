const itemPriceList = require("./items-price-list");
const discountRules = require("./discount-rules");

// Helper function
const roundCurrencyToTwoDigit = amount => Math.round(amount * 100) / 100;

module.exports = {
  calculateTotalPrice (basket) {
    const total = basket
      .getItemsInBasket()
      .map(item => itemPriceList.getPriceByItemName(item.name))
      .reduce((previous, current) => previous + current);

    const discounts = discountRules.calculateTotalDiscount(basket);

    return roundCurrencyToTwoDigit(total - discounts);
  },
  calculateTotalDiscount: discountRules.calculateTotalDiscount,
  calculateSubtotalByItem: (name, quantity) => itemPriceList.getPriceByItemName(name) * quantity
};
