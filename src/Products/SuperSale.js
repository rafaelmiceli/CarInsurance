const Product = require('../Products/Product');

class SuperSale extends Product {

    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    update() {
        this.sellIn -= 1;
        this.price -= 2;
        this.price = (this.price < 0) ? 0 : this.price;
    }
}

module.exports = SuperSale;