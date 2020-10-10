const ProductFactory = require('./Factory/ProductFactory');
const coTest = require('./coTest');
const CarInsurance = coTest.CarInsurance;

const productsAtDayZero = [
    ProductFactory.create({ name: 'Medium Coverage', sellIn: 10, price: 20 }),
    ProductFactory.create({ name: 'Full Coverage', sellIn: 2, price: 10 }),
    ProductFactory.create({ name: 'Low Coverage', sellIn: 5, price: 7 }),
    ProductFactory.create({ name: 'Mega Coverage', sellIn: 0, price: 80 }),
    ProductFactory.create({ name: 'Mega Coverage', sellIn: -1, price: 80 }),
    ProductFactory.create({ name: 'Special Full Coverage', sellIn: 15, price: 20 }),
    ProductFactory.create({ name: 'Special Full Coverage', sellIn: 10, price: 49 }),
    ProductFactory.create({ name: 'Special Full Coverage', sellIn: 5, price: 49 }),
    ProductFactory.create({ name: 'Super Sale', sellIn: 3, price: 6 }),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
}