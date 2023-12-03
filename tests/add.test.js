import {expect} from 'chai';
import add from '../src/add.js';

describe('Add', function() {
    it('Should return correct sum when adding two integers', function() {
      expect(5).to.equal(add(2, 3));
    });

    it('Should return correct sum when adding two doubles', function() {
        expect(6.0).to.equal(add(2.5, 3.5));
      });
});