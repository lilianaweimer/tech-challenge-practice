var expect = require('chai').expect;
var chapter = require('../src/ch1');

// ARRAYS AND STRINGS

describe('Chapter One', () => {

  describe('Is Unique', () => {

    it.skip('should return true if there are no duplicates', () => {
      const result = chapter.isUnique('qwertyuiop asdfghjkl');
      expect(result).to.equal(true);
    });

    it.skip('should return false if there is one duplicate', () => {
      const result = chapter.isUnique('qweertyuiop');
      expect(result).to.equal(false);
    });

    it.skip('should return false if there are multiple duplicates', () => {
      const result = chapter.isUnique('qweertyuuuioppp');
      expect(result).to.equal(false);
    });

  });

  describe('Check Permutation', () => {

    it.skip('should return true if the second string contains a permutation of the first', () => {
      const result = chapter.checkPermutation('ab', 'balloon');
      expect(result).to.equal(true);
    });

    it.skip('should return false if the second string does NOT contain a permutation of the first', () => {
      const result = chapter.checkPermutation('ab', 'lampoon');
      expect(result).to.equal(false);
    });

  });

  describe('URLify', () => {
    
    it.skip('should correctly transform sample string one', () => {
      const result = chapter.urlify('this is a test');
      expect(result).to.equal('this%20is%20a%20test');
    });

    it.skip('should correctly transform sample string two', () => {
      const result = chapter.urlify(' another url  test ');
      expect(result).to.equal('%20another%20url%20%20test%20');
    });

    it.skip('should not change strings with no spaces', () => {
      const result = chapter.urlify('nospaces');
      expect(result).to.equal('nospaces');
    });

  });

});