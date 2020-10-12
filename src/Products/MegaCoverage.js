const Product = require('../Products/Product');

class MegaCoverage extends Product {

    constructor(props) {
        super(props)
    }

    update() {
        this.sellIn -= 1;
    }
}

module.exports = MegaCoverage;