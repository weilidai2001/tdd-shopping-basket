const itemPriceList = require("./items-price-list");

// Helper function
const roundCurrencyToTwoDigit = amount => Math.round(amount * 100) / 100;

module.exports = {
  calculateTotalPrice (basket) {
    const total = basket
      .getItemsInBasket()
      .map(item => itemPriceList.getPriceByItemName(item.name))
      .reduce((previous, current) => previous + current);

    return roundCurrencyToTwoDigit(total);
  }
};
