const Product = require('../Products/Product');

class SpecialFullCoverage extends Product {

    constructor(pros) {
        super(pros.name, pros.sellIn, pros.price);

        this.ranges = [
            { 'min': -Number.MAX_SAFE_INTEGER, 'max': 0, 'action': 'this.price = 0' },
            { 'min': 1, 'max': 5, 'action': 'this.alterPrice(3)' },
            { 'min': 6, 'max': 10, 'action': 'this.alterPrice(2)' },
            { 'min': 11, 'max': Number.MAX_SAFE_INTEGER, 'action': 'this.alterPrice(1)' },
        ];
    }

    calculatePrice(sellInValue) {
        this.ranges.forEach(range => {
            if (range.min <= sellInValue && sellInValue <= range.max) {
                eval(range.action);
                return;
            }
        });
    }
    
    update() {
        this.alterSellIn(-1);
        this.calculatePrice(this.sellIn);
        this.checkMaxPrice();
    }
}

module.exports = SpecialFullCoverage;