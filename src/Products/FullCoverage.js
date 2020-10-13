const Product = require('../Products/Product');

class FullCoverage extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price)
    }

    update() {
        this.decrementSellIn(1);
        let qty = (this.sellIn > 0)? 1 : 2;
        this.incrementPrice(qty);
        this.checkMaxPrice();
    }
}

module.exports = FullCoverage;