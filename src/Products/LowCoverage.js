const Product = require('../Products/Product');

class LowCoverage extends Product {

    constructor(name, sellIn, prize) {
        super(name, sellIn, prize)
    }

    update() {
        console.log('LowCoverage update');
    }
}

module.exports = LowCoverage;