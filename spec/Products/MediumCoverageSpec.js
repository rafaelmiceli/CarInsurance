const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Medium Coverage", function() {

  it("should decrease sellIn by 1 and decrease price by 1", function() {
    const product = ProductFactory.create({ name: 'Medium Coverage', sellIn: 10, price: 20 });
    product.update();
    expect(product.name).equal('Medium Coverage');
    expect(product.sellIn).equal(9);
    expect(product.price).equal(19);
  });

  it("should decrease sellIn by 1 and decrease price by 2", function () {
    const product = ProductFactory.create({ name: 'Medium Coverage', sellIn: 0, price: 10 });
    product.update();
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(8);
  });

  it("should decrease sellIn by 1 and price keep its minimun value (0)", function () {
    const product = ProductFactory.create({ name: 'Medium Coverage', sellIn: -5, price: 0 });
    product.update();
    expect(product.sellIn).equal(-6);
    expect(product.price).equal(0);
  }); 
  
});
