import {expect} from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', function() {
    it('Should return true if value is null', function() {
        expect(isEmpty(null)).to.be.true;
    });

    it('Should return true if value is boolean', function() {
        expect(isEmpty(false)).to.be.true;
    });

    it('Should return true if value is a number', function() {
        expect(isEmpty(2)).to.be.true;
    });

    it('Should return true if value is an empty array', function() {
        expect(isEmpty([])).to.be.true;
    });

    it('Should return false if value is an array', function() {
        expect(isEmpty([1, 3, 4])).to.be.false;
    });

    it('Should return false if value is a string', function() {
        expect(isEmpty('hello')).to.be.false;
    });

    it('Should return true if value is an empty string', function() {
        expect(isEmpty('')).to.be.true;
    });

    it('Should return false if value is an object', function() {
        expect(isEmpty({'n': 3})).to.be.false;
    });

    it('Should return true if value is an empty object', function() {
        expect(isEmpty({})).to.be.true;
    });

    it('should return true if value is an empty map', () => {
        const map = new Map();
        expect(isEmpty(map)).to.be.true;
    })

    it('should return true if value is an empty prototype', () => {
        function Test() {}
        const test = new Test();
        expect(isEmpty(test.__proto__)).to.be.true;
    })

    it('should return true if value is a typed array', () => {
        expect(isEmpty(new Uint8Array([1]))).to.be.false;
    })
});