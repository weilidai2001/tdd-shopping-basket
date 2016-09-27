'use strict';

const should = require("chai").should();
const Basket = require("../src/basket.js");
const priceCalculator = require("../src/price-calculator.js");


describe("Calculating totals", function () {
  it("should calculate the total cost of items that are not on sale", function(){
    const basket = new Basket(priceCalculator);
    basket.addItemToBasket({name: "apple"}); // 25p
    basket.addItemToBasket({name: "orange"}); // 30p
    basket.addItemToBasket({name: "garlic"}); // 15p

    basket.calculateTotalPrice().should.equal(0.7);
  });

  it("should calculate the total cost of items that are three for the price of two", function(){
    const basket = new Basket(priceCalculator);
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p

    basket.calculateTotalPrice().should.equal(1);
  });

  it("should calculate the total cost of items that three for the price of two applies more than once", function(){
    const basket = new Basket(priceCalculator);
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p

    basket.calculateTotalPrice().should.equal(2);
  });

  it("should calculate the total cost of items that are a mixture of discounted and non-discounted", function(){
    const basket = new Basket(priceCalculator);
    basket.addItemToBasket({name: "apple"}); // 25p
    basket.addItemToBasket({name: "orange"}); // 30p
    basket.addItemToBasket({name: "garlic"}); // 15p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p
    basket.addItemToBasket({name: "papaya"}); // 50p

    basket.calculateTotalPrice().should.equal(2.70);
  });

});

describe("Displaying results", function () {
  it("should display items with no discount");

  it("should display items including items that has discounts");
});