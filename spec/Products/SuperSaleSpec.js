const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Super Sale", function() {

  it("should Super Sale", function() {
    const product = ProductFactory.create({ name: 'Super Sale', sellIn: 2, price: 10 });
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

});
