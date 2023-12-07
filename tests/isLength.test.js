import {expect} from 'chai';
import isLength from '../src/isLength.js';

const MAX_SAFE_INTEGER = 9007199254740991;
describe('isLength', function() {
    it('Should return true when valid numeric value is given', function() {
        expect(isLength(0)).to.be.true;
        expect(isLength(1)).to.be.true;
        expect(isLength(100)).to.be.true;
        expect(isLength(MAX_SAFE_INTEGER)).to.be.true;
    });

    it('Should return false when invalid numeric value is givem', function() {
        expect(isLength(-1)).to.be.false;
        expect(isLength(1.5)).to.be.false;
        expect(isLength(MAX_SAFE_INTEGER + 1)).to.be.false;
    });

    it('Should return false when non-numeric values are given', function() {
        expect(isLength('3')).to.be.false;
        expect(isLength([])).to.be.false;
        expect(isLength({})).to.be.false;
        expect(isLength(null)).to.be.false;
        expect(isLength(undefined)).to.be.false;
        expect(isLength(true)).to.be.false;
    });

    it('Should return false for Number.MIN_VALUE, Infinity, and NaN', function() {
        expect(isLength(Number.MIN_VALUE)).to.be.false;
        expect(isLength(Infinity)).to.be.false;
        expect(isLength(NaN)).to.be.false;
    });

    it('Should return true for 0', function() {
        expect(isLength(0)).to.be.true;
    });

    it('Should handle values around MAX_SAFE_INTEGER correctly', function() {
        expect(isLength(MAX_SAFE_INTEGER - 1)).to.be.true;
        expect(isLength(MAX_SAFE_INTEGER)).to.be.true;
        expect(isLength(MAX_SAFE_INTEGER + 1)).to.be.false;
    });
});