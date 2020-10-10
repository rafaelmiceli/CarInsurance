const expect = require('chai').expect;

const Product = require('../../src/Products/Product');

describe("Product", function() {

  it("should Product", function() {
    const product = new Product({ name: 'Product Name', sellIn: 2, price: 10 });
    expect(product.name).equal('Product Name');
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

});
