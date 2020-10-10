const Product = require('../Products/Product');

class FullCoverage extends Product {

    constructor(props) {
        super(props)
    }

    update() {
        console.log(this.name);
    }
}

module.exports = FullCoverage;