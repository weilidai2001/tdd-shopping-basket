const itemPriceList = require("../items-price-list");

module.exports = {
  calculateDiscount(basket){
    return itemPriceList.getPriceByItemName("papaya") * Math.floor(basket.countItemsByType("papaya") / 2);
  }
};