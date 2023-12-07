import {expect} from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', function() {
    it('Should convert the first character of a lowercase string to uppercase', function() {
        expect(upperFirst('fred')).to.equal('Fred');
    });

    it('Should not change a string that already starts with an uppercase character', function() {
        expect(upperFirst('Fred')).to.equal('Fred');
    });

    it('Should not change a string where all characters are uppercase', function() {
        expect(upperFirst('FRED')).to.equal('FRED');
    });

    it('Should return an empty string when given an empty string', function() {
        expect(upperFirst('')).to.equal('');
    });

    it('Should convert the first non-whitespace character to uppercase', function() {
        expect(upperFirst(' fred')).to.equal(' Fred');
    });

    it('Should leave the string unchanged if it starts with a number or special character', function() {
        expect(upperFirst('123abc')).to.equal('123abc');
        expect(upperFirst('!hello')).to.equal('!hello');
    });

    it('Should handle a single character', function() {
        expect(upperFirst('a')).to.equal('A');
        expect(upperFirst('A')).to.equal('A');
    });

    it('Should return an empty string for non-string inputs', function() {
        expect(upperFirst(null)).to.equal('');
        expect(upperFirst(undefined)).to.equal('');
        expect(upperFirst(123)).to.equal('');
        expect(upperFirst({})).to.equal('');
    });
});