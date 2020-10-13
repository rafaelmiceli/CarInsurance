const expect = require('chai').expect;

const Product = require('../../src/Products/Product');

describe("Product", function() {

  it("should create Product and set its properties", function() {
    const product = new Product('Product Name', 2, 10);
    expect(product.name).equal('Product Name');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

});
