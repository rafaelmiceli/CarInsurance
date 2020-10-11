const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Full Coverage", function() {

  it("should increase price by 1 and decrease sellIn by 1", function () {
    const product = ProductFactory.create({ name: 'Full Coverage', sellIn: 2, price: 0 });
    product.update();
    expect(product.sellIn).equal(1);
    expect(product.price).equal(1);
  });

  it("should increase price by 2 and decrease sellIn by 1", function () {
    const product = ProductFactory.create({ name: 'Full Coverage', sellIn: 0, price: 1 });
    product.update();
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(3);
  });

  it("should decrease sellIn by 1 and price must not be greater than 50", function () {
    const product = ProductFactory.create({ name: 'Full Coverage', sellIn: 0, price: 50 });
    product.update();
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(50);
  });

});
