const Product = require('../Products/Product');

class LowCoverage extends Product {

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    update() {
        
    }
}

module.exports = LowCoverage;