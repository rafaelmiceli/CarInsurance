const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Super Sale", function() {

  it("should Super Sale", function () {
    const product = ProductFactory.create({ name: 'Super Sale', sellIn: 3, price: 6 });
    product.update();
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(4);
  });

  it("should Super Sale", function () {
    const product = ProductFactory.create({ name: 'Super Sale', sellIn: -1, price: 1});
    product.update();
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(-2);
    expect(product.price).equal(0);
  });

  it("should Super Sale", function () {
    const product = ProductFactory.create({ name: 'Super Sale', sellIn: -1, price: 1 });
    product.update();
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(-2);
    expect(product.price).equal(0);
  });

});
