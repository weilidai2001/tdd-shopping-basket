'use strict';

const should = require("chai").should();
const Basket = require("../src/basket.js");

describe("Basket senarios", function () {
  it("should calculate the total cost of items that are not on sale", function(){
    const basket = new Basket();
    basket.addItemToBasket({name: "apple"}); // 25p
    basket.addItemToBasket({name: "orange"}); // 30p
    basket.addItemToBasket({name: "garlic"}); // 15p

    basket.calculateTotalPrice().should.equal(0.25 + 0.3 + 0.15);
  });

  it("should calculate the total cost of items that are three for the price of two", function(){
    const basket = new Basket();
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p

    basket.calculateTotalPrice().should.equal(0.5 + 0.5);
  });

  it("should calculate the total cost of items that three for the price of two applies more than once");

  it("should calculate the total cost of items that are a mixture of discounted and non-discounted");

});