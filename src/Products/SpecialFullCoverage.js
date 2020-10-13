const Product = require('../Products/Product');

class SpecialFullCoverage extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price)
    }

    update() {
        this.decrementSellIn(1);

        if (this.sellIn <= 0) {
            this.price = 0;
        } else if (this.sellIn < 5){
            this.incrementPrice(3);
        } else if (this.sellIn < 10) {
            this.incrementPrice(2);
        } else {
            this.incrementPrice(1);
        }

        this.checkMaxPrice();
    }
}

module.exports = SpecialFullCoverage;