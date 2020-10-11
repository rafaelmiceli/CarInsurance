const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Super Sale", function() {

  it("should decrease sellIn by 1 and decrease price by 2", function () {
    const product = ProductFactory.create({ name: 'Super Sale', sellIn: 3, price: 6 });
    product.update();
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(4);
  });

  it("should decrease sellIn by 1 and decrease price by 2, price must not be lower than 0", function () {
    const product = ProductFactory.create({ name: 'Super Sale', sellIn: -1, price: 1});
    product.update();
    expect(product.name).equal('Super Sale');
    expect(product.sellIn).equal(-2);
    expect(product.price).equal(0);
  });
});
