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

  describe.skip('Check Permutation', () => {

    it('should return true if the second string contains a permutation of the first', () => {
      const result = chapter.checkPermutation('ab', 'balloon');
      expect(result).to.equal(true);
    });

    it('should return false if the second string does NOT contain a permutation of the first', () => {
      const result = chapter.checkPermutation('ab', 'lampoon');
      expect(result).to.equal(false);
    });

  });

  describe.skip('URLify', () => {
    
    it('should correctly transform sample string one', () => {
      const result = chapter.urlify('this is a test', 14);
      expect(result).to.equal('this%20is%20a%20test');
    });

    it('should correctly transform sample string two', () => {
      const result = chapter.urlify(' another url  test ', 19);
      expect(result).to.equal('%20another%20url%20%20test%20');
    });

    it('should not change strings with no spaces', () => {
      const result = chapter.urlify('nospaces', 8);
      expect(result).to.equal('nospaces');
    });

  });

  describe.skip('Palindrome Permutation', () => {
    
    it('should return true if the string is a permutation of a palindrome', () => {
      const result = chapter.palindromePermutation('tact coa');
      expect(result).to.equal(true);
      // taco cat
    });

    it('should return false if the string is not a permutation of a palindrome', () => {
      const result = chapter.palindromePermutation('carapace');
      expect(result).to.equal(false);
    });

  });

  describe.skip('One Away', () => {
    
    it('should return true if the strings are one addition away', () => {
      const result = chapter.oneAway('pale', 'ple');
      expect(result).to.equal(true);
    });

    it('should return true if the strings are one subtraction away', () => {
      const result = chapter.oneAway('pale', 'pales');
      expect(result).to.equal(true);
    });

    it('should return true if the strings are one replacement away', () => {
      const result = chapter.oneAway('pale', 'pile');
      expect(result).to.equal(true);
    });

    it('should return true if the strings are zero edits away', () => {
      const result = chapter.oneAway('pale', 'pale');
      expect(result).to.equal(true);
    });

    it('should return false if the strings are NOT one edit away', () => {
      const result = chapter.oneAway('pale', 'pail');
      expect(result).to.equal(false);
    });

  });

  describe.skip('String Compression', () => {
    
    it('should return a compressed string if there are duplicates', () => {
      const result = chapter.stringCompression('aabcccccaaa');
      expect(result).to.equal('a2bb1c5a3');
    });

    it('should return the original string if compression would not shorten it', () => {
      const result = chapter.stringCompression('abcde');
      expect(result).to.equal('abcde');
    });

  });

});