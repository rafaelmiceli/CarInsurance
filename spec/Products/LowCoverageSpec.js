const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Low Coverage", function() {

  it("should Low Coverage", function() {
    const product = ProductFactory.create({ name: 'Low Coverage', sellIn: 2, price: 10 });
    expect(product.name).equal('Low Coverage');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

});
