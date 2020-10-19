var expect = require('chai').expect;
var chapter = require('../src/ch1');

// ARRAYS AND STRINGS

describe('Chapter One', () => {

  describe('Is Unique', () => {

    it('should return true if there are no duplicates', () => {
      const result = chapter.isUnique('qwertyuiop asdfghjkl');
      expect(result).to.equal(true);
    });

    it('should return false if there is one duplicate', () => {
      const result = chapter.isUnique('qweertyuiop');
      expect(result).to.equal(false);
    });

    it('should return false if there are multiple duplicates', () => {
      const result = chapter.isUnique('qweertyuuuioppp');
      expect(result).to.equal(false);
    });

  });

});