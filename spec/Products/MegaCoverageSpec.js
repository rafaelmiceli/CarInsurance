const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Mega Coverage", function() {

  it("should Mega Coverage", function() {
    const product = ProductFactory.create({ name: 'Mega Coverage', sellIn: 2, price: 10 });
    expect(product.name).equal('Mega Coverage');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

});
