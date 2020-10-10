const Product = require('../Products/Product');

class SuperSale extends Product {

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    update() {
        
    }
}

module.exports = SuperSale;