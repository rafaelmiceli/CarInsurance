const Product = require('../Products/Product');

class SpecialFullCoverage extends Product {

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    update() {
        this.sellIn -= 1;
        this.price += 1;

        this.price = (this.price > 50) ? 50 : this.price;
        this.price = (this.sellIn < 0) ? 0 : this.price;
    }
}

module.exports = SpecialFullCoverage;