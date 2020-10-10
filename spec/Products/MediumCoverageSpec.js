const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Medium Coverage", function() {

  it("should Medium Coverage", function() {
    const product = ProductFactory.create({ name: 'Medium Coverage', sellIn: 10, price: 20 });
    product.update();
    expect(product.name).equal('Medium Coverage');
    expect(product.sellIn).equal(9);
    expect(product.price).equal(19);
  });

  it("should update", function () {
    const product = ProductFactory.create({ name: 'Medium Coverage', sellIn: 0, price: 10 });
    product.update();
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(8);
  });

  it("should update", function () {
    const product = ProductFactory.create({ name: 'Medium Coverage', sellIn: -5, price: 0 });
    product.update();
    expect(product.sellIn).equal(-6);
    expect(product.price).equal(0);
  }); 
  
});
