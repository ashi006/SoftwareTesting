import {expect} from 'chai';
import filter from '../src/filter.js';

describe('Filter', function() {
    it('should return filtered array based on a predicate', function() {
        const array = [1, 2, 3, 4, 5];
        const predicate = (value) => value > 3;
        expect(filter(array, predicate)).to.deep.equal([4, 5]);
    });

    /*it('should return an empty array if no elements match the predicate', function() {
        const array = [1, 2, 3];
        const predicate = (value) => value > 5;
        expect(filter(array, predicate)).to.deep.equal([]);
    });*/

    it('should return all elements if all match the predicate', function() {
        const array = [1, 2, 3];
        const predicate = (value) => value < 4;
        expect(filter(array, predicate)).to.deep.equal(array);
    });

    /*it('should work with a predicate that uses index and array', function() {
        const array = ['apple', 'banana', 'grape'];
        const predicate = (value, index, arr) => index === 1 || arr.length === 3;
        expect(filter(array, predicate)).to.deep.equal(['banana', 'grape']);
    });

    it('should return an empty array when the input array is empty', function() {
        expect(filter([], (value) => value > 1)).to.deep.equal([]);
    });

    it('should return an empty array when the input is not an array', function() {
        expect(filter(null, (value) => value)).to.deep.equal([]);
        expect(filter(undefined, (value) => value)).to.deep.equal([]);
    });

    it('should return an empty array when the predicate is not a function', function() {
        const array = [1, 2, 3];
        expect(filter(array, null)).to.deep.equal([]);
    });*/
});