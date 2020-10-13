const Product = require('../Products/Product');

class MegaCoverage extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price)
    }

    update() {
        this.alterSellIn(-1);
    }
}

module.exports = MegaCoverage;