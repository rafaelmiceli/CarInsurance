const Product = require('../Products/Product');

class MegaCoverage extends Product {

    constructor(name, sellIn, prize) {
        super(name, sellIn, prize)
    }

    update() {
        console.log('MegaCoverage update');
    }
}

module.exports = MegaCoverage;