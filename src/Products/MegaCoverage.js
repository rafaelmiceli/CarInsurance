const Product = require('../Products/Product');

class MegaCoverage extends Product {

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    update() {}
}

module.exports = MegaCoverage;