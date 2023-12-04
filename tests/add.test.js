import {expect} from 'chai';
import add from '../src/add.js';

describe('Add', function() {
    it('Should return correct sum when adding two integers', function() {
      expect(5).to.equal(add(2, 3));
    });

    it('Should return correct sum when adding two doubles', function() {
        expect(6.0).to.equal(add(2.5, 3.5));
    });

    it('Should return correct sum when adding an integer and a double', function() {
        expect(5.5).to.equal(add(2, 3.5));
    });

    it('Should return correct sum when adding two negative integers', function() {
        expect(-5).to.equal(add(-2, -3));
    });

    it('Should return correct sum when adding two negative doubles', function() {
        expect(-5.8).to.equal(add(-2.3, -3.5));
    });

    it('Should return correct sum when adding a negative integer and a double', function() {
        expect(1.5).to.equal(add(-2, 3.5));
    });

    it('should handle non-numeric inputs by returning NaN', function() {
        expect(add('a', 'b')).to.be.NaN;
    });

    it('Should return correct sum when adding undefined and positive integer', function() {
        expect(5).to.equal(add(undefined, 5));
    });

    it('Should return correct sum when adding null and positive integer', function() {
        expect(5).to.equal(add(null, 5));
    });

    it('Should return correct sum when adding null and positive double', function() {
        expect(5.5).to.equal(add(null, 5.5));
    });

    it('Should return correct sum when adding undefined and negative integer', function() {
        expect(-5).to.equal(add(undefined, -5));
    });

    it('Should return correct sum when adding null and negative integer', function() {
        expect(-5).to.equal(add(null, -5));
    });

    it('Should return correct sum when adding null and negative double', function() {
        expect(-5.5).to.equal(add(null, -5.5));
    });

    it('Should return NaN when adding undefined and NaN', function() {
        expect(add(undefined, NaN)).to.be.NaN;
    });

    it('should return NaN when adding two NaNs', function() {
        expect(add(NaN, NaN)).to.be.NaN;
    });
});