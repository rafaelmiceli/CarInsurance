class Product {
    
    
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
        this.maxPrice = 50;
        this.minPrice = 0;
    }

    decrementSellIn(qty) {
        this.sellIn -= qty;
    }

    incrementPrice(qty) {
        this.price += qty;
    }
    
    checkMaxPrice() {
        this.price = (this.price > this.maxPrice) ? this.maxPrice : this.price; 
    }

    checkMinPrice() {
        this.price = (this.price < this.minPrice) ? this.minPrice : this.price;
    }
}

module.exports = Product;