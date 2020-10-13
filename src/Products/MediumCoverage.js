const Product = require('../Products/Product');

class MediumCoverage extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price)
    }

    update() {
        this.sellIn -= 1;
        let qty = (this.sellIn > 0)? 1 : 2; 
        this.price -= qty;
        this.price = (this.price < 0)? 0 : this.price;
    }
}

module.exports = MediumCoverage;