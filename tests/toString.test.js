import {expect} from 'chai';
import toString from '../src/toString.js';

describe('toString', function() {
    /*it('Should return an empty string for null and undefined', function() {
        expect(toString(null)).to.equal('');
        expect(toString(undefined)).to.equal('');
    });*/

    it('Should preserve the sign of -0', function() {
        expect(toString(-0)).to.equal('-0');
    });

    it('Should convert an array to a comma-separated string', function() {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });

    it('Should convert a symbol to a string', function() {
        const symbol = Symbol('test');
        expect(toString(symbol)).to.equal(symbol.toString());
    });

    it('Should return the string itself when a string is passed', function() {
        expect(toString('hello')).to.equal('hello');
    });

    it('Should convert a number to a string', function() {
        expect(toString(100)).to.equal('100');
        expect(toString(3.14)).to.equal('3.14');
    });

    it('Should convert a boolean to a string', function() {
        expect(toString(true)).to.equal('true');
        expect(toString(false)).to.equal('false');
    });

    it('Should convert an object to a string', function() {
        expect(toString({})).to.equal('[object Object]');
    });

    it('Should convert an array with various types to a string', function() {
        expect(toString([1, 'a', null, undefined, true])).to.equal('1,a,,,true');
    });
});