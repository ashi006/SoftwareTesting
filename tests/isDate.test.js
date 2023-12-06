import {expect} from 'chai';
import isDate from '../src/isDate.js';

describe('isDate', function() {
    it('Should return false if value is null', function() {
        expect(isDate(null)).to.be.false;
    });

    it('Should return true if value is a date object', function() {
        expect(isDate(new Date())).to.be.true;
    });

    it('Should return false if value is boolean', function() {
        expect(isDate(true)).to.be.false;
    });

    it('Should return false if value is an integer', function() {
        expect(isDate(42)).to.be.false;
    });

    it('should return false if value is an array', function() {
        expect(isDate([])).to.be.false;
    });
      
    it('should return false if value is an object', function() {
    expect(isDate({})).to.be.false;
    });

    it('Should return false if value is not a date', function() {
        expect(isDate('Dec 04, 2023')).to.be.false;
    });
});