const Product = require('../Products/Product');

class MediumCoverage extends Product {

    constructor(name, sellIn, prize) {
        super(name, sellIn, prize)
    }

    update() {
        console.log('MediumCoverage update');
    }
}

module.exports = MediumCoverage;