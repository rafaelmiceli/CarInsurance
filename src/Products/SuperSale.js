const Product = require('../Products/Product');

class SuperSale extends Product {

    constructor(name, sellIn, prize) {
        super(name, sellIn, prize)
    }

    update() {
        console.log('SuperSale update');
    }
}

module.exports = SuperSale;