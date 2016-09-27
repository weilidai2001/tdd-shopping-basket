const threePapayasForThePriceOfTwo = require('./three-papays-for-price-of-two');

module.exports = {
  calculateTotalDiscount(basket) {
    return threePapayasForThePriceOfTwo.calculateDiscount(basket);
  }
};