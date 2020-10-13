const Product = require('../Products/Product');

class SuperSale extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price)
    }

    update() {
        this.decrementSellIn(1);
        this.incrementPrice(-2);
        this.checkMinPrice();
    }
}

module.exports = SuperSale;