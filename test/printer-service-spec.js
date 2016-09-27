'use strict';

const should = require("chai").should();
const Basket = require("../src/basket.js");
const PrinterService = require("../src/printer-service.js");
const priceCalculatorService = require("../src/price-calculator-service.js");

describe("Displaying results", function () {
  it("should display items with no discount", function(){
    const expectedOutput = [
      "apple x 1 £0.25",
      "orange x 1 £0.30",
      "garlic x 1 £0.15",
      "------------",
      "discount: -£0.00",
      "total: £0.70"
    ].join("\n");

    const printerService = new PrinterService(priceCalculatorService);

    const basket = new Basket();
    basket.addItemToBasket({name: "apple"});
    basket.addItemToBasket({name: "orange"});
    basket.addItemToBasket({name: "garlic"});

    printerService.generateReceiptAsString(basket).should.equal(expectedOutput);
  });

  it("should display items including items that has discounts", function(){
    const expectedOutput = [
      "apple x 1 £0.25",
      "orange x 1 £0.30",
      "garlic x 1 £0.15",
      "papaya x 3 £1.50",
      "------------",
      "discount: -£0.50",
      "total: £1.70"
    ].join("\n");

    const printerService = new PrinterService(priceCalculatorService);

    const basket = new Basket();
    basket.addItemToBasket({name: "apple"});
    basket.addItemToBasket({name: "orange"});
    basket.addItemToBasket({name: "garlic"});
    basket.addItemToBasket({name: "papaya"});
    basket.addItemToBasket({name: "papaya"});
    basket.addItemToBasket({name: "papaya"});

    printerService.generateReceiptAsString(basket).should.equal(expectedOutput);
  });
});