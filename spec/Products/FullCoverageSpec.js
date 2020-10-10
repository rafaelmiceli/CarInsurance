const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Full Coverage", function() {

  it("should Full Coverage", function() {
    const product = ProductFactory.create({ name: 'Full Coverage', sellIn: 2, price: 10 });
    expect(product.name).equal('Full Coverage');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

});
