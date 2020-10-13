const Product = require('../Products/Product');

class SpecialFullCoverage extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price)
    }

    update() {
        this.sellIn -= 1;

        if (this.sellIn <= 0) {
            this.price = 0;
        } else if (this.sellIn < 5){
            this.price += 3;
        } else if (this.sellIn < 10) {
            this.price += 2;
        } else {
            this.price += 1;
        }

        this.price = (this.price > 50) ? 50 : this.price;
    }
}

module.exports = SpecialFullCoverage;