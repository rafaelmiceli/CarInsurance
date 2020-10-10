const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Medium Coverage", function() {

  it("should Medium Coverage", function() {
    const product = ProductFactory.create({ name: 'Medium Coverage', sellIn: 2, price: 10 });
    expect(product.name).equal('Medium Coverage');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

});
