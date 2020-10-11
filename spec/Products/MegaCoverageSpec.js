const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Mega Coverage", function() {

  it("should keep its price in 80", function() {
    const product = ProductFactory.create({ name: 'Mega Coverage', sellIn: -1, price: 80 });
    product.update();
    expect(product.name).equal('Mega Coverage');
    expect(product.sellIn).equal(-2);
    expect(product.price).equal(80);
  });

  it("should keep its price in 80", function () {
    const product = ProductFactory.create({ name: 'Mega Coverage', sellIn: 0, price: 80 });
    product.update();
    expect(product.name).equal('Mega Coverage');
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(80);
  });

});
