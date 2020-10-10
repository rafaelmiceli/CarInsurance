const FullCoverage = require('../Products/FullCoverage');
const SpecialFullCoverage = require('../Products/SpecialFullCoverage');
const MegaCoverage = require('../Products/MegaCoverage');
const LowCoverage = require('../Products/LowCoverage');
const MediumCoverage = require('../Products/MediumCoverage');
const SuperSale = require('../Products/SuperSale');

class ProductFactory {

    create(props) {
        
        switch (props.name) {
            case 'Full Coverage':
                return new FullCoverage(props);
            case 'Special Full Coverage':
                return new SpecialFullCoverage(props);
            case 'Mega Coverage':
                return new MegaCoverage(props);
            case 'Low Coverage':
                return new LowCoverage(props);
            case 'Medium Coverage':
                return new MediumCoverage(props);
            case 'Super Sale':
                return new SuperSale(props);
            default: {
                throw new Error('Product Type Does Not Exist');
            }
        }
    }
}

module.exports = new ProductFactory();