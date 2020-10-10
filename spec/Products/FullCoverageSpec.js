const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Full Coverage", function() {

  it("should Full Coverage", function() {
    const product = ProductFactory.create({ name: 'Full Coverage', sellIn: 2, price: 0 });
    expect(product.name).equal('Full Coverage');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(0);
  });

  it("should update", function () {
    const product = ProductFactory.create({ name: 'Full Coverage', sellIn: 2, price: 0 });
    product.update();
    expect(product.sellIn).equal(1);
    expect(product.price).equal(1);
  });

  it("should update", function () {
    const product = ProductFactory.create({ name: 'Full Coverage', sellIn: 0, price: 1 });
    product.update();
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(3);
  });

  it("should update", function () {
    const product = ProductFactory.create({ name: 'Full Coverage', sellIn: 0, price: 50 });
    product.update();
    expect(product.sellIn).equal(-1);
    expect(product.price).equal(50);
  });

});
