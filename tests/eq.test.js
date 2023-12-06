import {expect} from 'chai';
import eq from '../src/eq.js';

describe('Equals', function() {
    it('Should return true for the same object reference', function() {
        const object = { 'a': 1 };
        expect(eq(object, object)).to.be.true;
    });

    it('Should return false for different objects with the same values', function() {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq(object, other)).to.be.false;
    });

    it('Should return true for equal primitive values', function() {
        expect(eq('a', 'a')).to.be.true;
        expect(eq(5, 5)).to.be.true;
    });

    it('Should return false for unequal primitive values', function() {
        expect(eq('hello', 'world')).to.be.false;
        expect(eq(5.5, 5)).to.be.false;
    });

    /*('Should return false when comparing a primitive with its object wrapper', function() {
        expect(eq('a', new String('a'))).to.be.false;
        expect(eq(5, new Number(5))).to.be.false;
    });*/

    it('Should return true when comparing NaN to NaN', function() {
        expect(eq(NaN, NaN)).to.be.true;
    });

    it('Should return true when comparing undefined to undefined, and null to null', function() {
        expect(eq(undefined, undefined)).to.be.true;
        expect(eq(null, null)).to.be.true;
    });

    it('Should return false when comparing a number to NaN', () => {
        expect(eq(10, NaN)).to.be.false
    });
    
    /*it('Should return false for values of different types', function() {
        expect(eq(1, '1')).to.be.false;
        expect(eq(true, 'true')).to.be.false;
    });*/

    it('Should return true for equal boolean values', function() {
        expect(eq(true, true)).to.be.true;
    });
    
    it('Should return false for different boolean values', function() {
        expect(eq(true, false)).to.be.false;
    });

    it("Should return false when comparing a NaN and undefined", () =>{
        expect(eq(NaN,undefined)).to.be.false
    });
});