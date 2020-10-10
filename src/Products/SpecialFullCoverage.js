const Product = require('../Products/Product');

class SpecialFullCoverage extends Product {

    constructor(name, sellIn, prize) {
        super(name, sellIn, prize)
    }

    update() {
        console.log('SpecialFullCoverage update');
    }
}

module.exports = SpecialFullCoverage;