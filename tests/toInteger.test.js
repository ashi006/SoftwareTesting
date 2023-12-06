import {expect} from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger', function() {
    it('Should convert a floating-point number to an integer', function() {
        expect(toInteger(3.2)).to.equal(3);
        expect(toInteger(-3.2)).to.equal(-3);
    });

    it('Should convert Number.MIN_VALUE to 0', function() {
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });

    it('Should handle Infinity appropriately', function() {
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });

    it('Should convert a numeric string to an integer', function() {
        expect(toInteger('3.2')).to.equal(3);
        expect(toInteger('-3.2')).to.equal(-3);
    });

    it('Should return 0 for non-numeric strings', function() {
        expect(toInteger('abc')).to.equal(0);
    });

    it('Should return 0 for false and 1 for true', function() {
        expect(toInteger(false)).to.equal(0);
        expect(toInteger(true)).to.equal(1);
    });

    it('Should return 0 for null and undefined', function() {
        expect(toInteger(null)).to.equal(0);
        expect(toInteger(undefined)).to.equal(0);
    });

    it('Should return 0 for objects and arrays', function() {
        expect(toInteger({})).to.equal(0);
        expect(toInteger([1, 2, 3])).to.equal(0);
    });

    it("Should return 0 for an empty object", () =>{
        expect(toInteger(Object())).to.equal(0)
    });

    it("Should return object of type number", () =>{
        expect(toInteger(Object(5))).to.equal(Number(5))
    });
});