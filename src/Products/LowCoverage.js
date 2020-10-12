const Product = require('../Products/Product');

class LowCoverage extends Product {

    constructor(props) {
        super(props)
    }

    update() {
        let qty = (this.sellIn > 0)? 1 : 2; 
        this.sellIn -= 1;
        this.price -= qty;
        this.price = (this.price < 0) ? 0 : this.price;
    }
}

module.exports = LowCoverage;