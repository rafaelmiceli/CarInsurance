const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Mega Coverage", function() {

  it("should Mega Coverage", function() {
    const product = ProductFactory.create({ name: 'Mega Coverage', sellIn: -1, price: 80 });
    product.update();
    expect(product.name).equal('Mega Coverage');
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(80);
  });

  it("should Mega Coverage", function () {
    const product = ProductFactory.create({ name: 'Mega Coverage', sellIn: 0, price: 80 });
    product.update();
    expect(product.name).equal('Mega Coverage');
    expect(product.sellIn).equal(0);
    expect(product.price).equal(80);
  });

});
