const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Special Full Coverage", function() {

  it("should increase by 1", function() {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 15, price: 20 });
    product.update();
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(14);
    expect(product.price).equal(21);
  });

  it("should increase by 1 and mantein max price", function () {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 4, price: 50 });
    product.update();
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(3);
    expect(product.price).equal(50);
  });

  it("should increase by 2", function () {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 10, price: 25 });
    product.update();
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(9);
    expect(product.price).equal(27);
  });

  it("should increase by 3", function () {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 5, price: 35 });
    product.update();
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(4);
    expect(product.price).equal(38);
  });

  it("should set price to 0", function () {
    const product = ProductFactory.create({ name: 'Special Full Coverage', sellIn: 1, price: 35 });
    product.update();
    expect(product.name).equal('Special Full Coverage');
    expect(product.sellIn).equal(0);
    expect(product.price).equal(0);
  });

});
