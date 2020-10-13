const Product = require('../Products/Product');

class SuperSale extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price)
    }

    update() {
        this.alterSellIn(-1);
        this.alterPrice(-2);
        this.checkMinPrice();
    }
}

module.exports = SuperSale;