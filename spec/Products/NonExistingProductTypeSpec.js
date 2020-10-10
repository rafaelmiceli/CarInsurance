const expect = require('chai').expect;

const ProductFactory = require('../../src/Factory/ProductFactory');

describe("Non Existing Product Type", function() {

  it("should Non Existing Product Type", function() {
    let props_name = 'NonExistingProductType';
    expect(() => ProductFactory.create({ name: props_name, sellIn: 2, price: 10 })).to.throw();
  });

});
