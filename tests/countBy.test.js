import {expect} from 'chai';
import countBy from '../src/countBy.js';

describe('countBy', function() {
    it('Should count occurrences based on the iteratee function with an array', function() {
        const users = [{ 'user': 'barney', 'active': true }, { 'user': 'betty', 'active': true }, { 'user': 'fred', 'active': false }];
        expect(countBy(users, value => value.active)).to.deep.equal({ 'true': 2, 'false': 1 });
    });

    it('Should work with an array of primitive types', function() {
        const numbers = [1, 2, 1, 3, 2];
        expect(countBy(numbers, value => value)).to.deep.equal({ '1': 2, '2': 2, '3': 1 });
    });

    it('Should return an empty object for an empty array', function() {
        expect(countBy([], value => value)).to.deep.equal({});
    });

    it('Should work with objects as collections', function() {
        const obj = { a: 'one', b: 'two', c: 'three', d: 'two' };
        expect(countBy(obj, value => value)).to.deep.equal({ 'one': 1, 'two': 2, 'three': 1 });
    });

    it('Should handle complex keys returned by iteratee', function() {
        const users = [{ 'user': 'barney', 'age': 36 }, { 'user': 'betty', 'age': 34 }, { 'user': 'fred', 'age': 36 }];
        expect(countBy(users, value => [value.age])).to.deep.equal({ '36': 2, '34': 1 });
    });

    it('Should return an empty object for non-array/non-object collections', function() {
        expect(countBy(123, value => value)).to.deep.equal({});
        expect(countBy(null, value => value)).to.deep.equal({});
    });
});