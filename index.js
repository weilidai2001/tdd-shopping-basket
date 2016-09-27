const Basket = require("./src/basket.js");
const PrinterService = require("./src/printer-service.js");
const priceCalculatorService = require("./src/price-calculator-service.js");

const printerService = new PrinterService(priceCalculatorService);

const basket = new Basket();
basket.addItemToBasket({name: "apple"});
basket.addItemToBasket({name: "orange"});
basket.addItemToBasket({name: "garlic"});
basket.addItemToBasket({name: "papaya"});
basket.addItemToBasket({name: "papaya"});
basket.addItemToBasket({name: "papaya"});

const receipt = printerService.generateReceiptAsString(basket);

console.log(receipt);
