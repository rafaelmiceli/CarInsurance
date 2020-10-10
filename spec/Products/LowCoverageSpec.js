const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Low Coverage", function() {

  it("should Low Coverage", function() {
    const product = ProductFactory.create({ name: 'Low Coverage', sellIn: 5, price: 7 });
    product.update();
    expect(product.name).equal('Low Coverage');
    expect(product.sellIn).equal(4);
    expect(product.price).equal(6);
  });

  it("should Low Coverage", function () {
    const product = ProductFactory.create({ name: 'Low Coverage', sellIn: 0, price: 2 });
    product.update();
    expect(product.name).equal('Low Coverage');
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(0);
  });

  it("should Low Coverage", function () {
    const product = ProductFactory.create({ name: 'Low Coverage', sellIn: -1, price: 0 });
    product.update();
    expect(product.name).equal('Low Coverage');
    expect(product.sellIn).equal(-2);
    expect(product.price).equal(0);
  });

});
