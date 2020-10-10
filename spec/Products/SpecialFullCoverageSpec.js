const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Special Full Coverage", function() {

  it("should Special Full Coverage", function() {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 15, price: 20 });
    product.update();
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(14);
    expect(product.price).equal(21);
  });

  it("should Special Full Coverage", function () {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 4, price: 50 });
    product.update();
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(3);
    expect(product.price).equal(50);
  });

  it("should Special Full Coverage", function () {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 0, price: 50 });
    product.update();
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(0);
  });

});
