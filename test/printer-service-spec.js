'use strict';

const should = require("chai").should();
const Basket = require("../src/basket.js");
const PrinterService = require("../src/printer-service.js");

describe("Displaying results", function () {
  it("should display items with no discount", function(){
    const expectedOutput = `
      apple x 1
      orange x 1
      garlic x 1
      ------------
      total: £0.70
    `;
    
    const printerService = new PrinterService();

    const basket = new Basket();
    basket.addItemToBasket({name: "apple"});
    basket.addItemToBasket({name: "orange"});
    basket.addItemToBasket({name: "garlic"});

    printerService.printReceipt(basket).should.equal(expectedOutput);
  });

  it("should display items including items that has discounts");
});