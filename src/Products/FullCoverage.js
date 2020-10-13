const Product = require('../Products/Product');

class FullCoverage extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price)
    }

    update() {
        this.sellIn -= 1;
        let qty = (this.sellIn > 0)? 1 : 2;
        this.price += qty;
        this.price = (this.price > 50) ? 50 : this.price; 
    }
}

module.exports = FullCoverage;