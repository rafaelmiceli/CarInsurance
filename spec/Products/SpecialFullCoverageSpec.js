const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Special Full Coverage", function() {

  it("should Special Full Coverage", function() {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 2, price: 10 });
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

});
