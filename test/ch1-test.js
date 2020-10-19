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
      const result = chapter.urlify('this is a test', 14);
      expect(result).to.equal('this%20is%20a%20test');
    });

    it.skip('should correctly transform sample string two', () => {
      const result = chapter.urlify(' another url  test ', 19);
      expect(result).to.equal('%20another%20url%20%20test%20');
    });

    it.skip('should not change strings with no spaces', () => {
      const result = chapter.urlify('nospaces', 8);
      expect(result).to.equal('nospaces');
    });

  });

  describe('Palindrome Permutation', () => {
    
    it.skip('should return true if the string is a permutation of a palindrome', () => {
      const result = chapter.urlify('tact coa');
      expect(result).to.equal(true);
      // taco cat
    });

    it.skip('should return false if the string is not a permutation of a palindrome', () => {
      const result = chapter.urlify('carapace');
      expect(result).to.equal(false);
    });

  });

  describe('One Away', () => {
    
    it.skip('should return true if the strings are one addition away', () => {
      const result = chapter.urlify('pale', 'ple');
      expect(result).to.equal(true);
    });

    it.skip('should return true if the strings are one subtraction away', () => {
      const result = chapter.urlify('pale', 'pales');
      expect(result).to.equal(true);
    });

    it.skip('should return true if the strings are one replacement away', () => {
      const result = chapter.urlify('pale', 'pile');
      expect(result).to.equal(true);
    });

    it.skip('should return true if the strings are zero edits away', () => {
      const result = chapter.urlify('pale', 'pale');
      expect(result).to.equal(true);
    });

    it.skip('should return false if the strings are NOT one edit away', () => {
      const result = chapter.urlify('pale', 'pail');
      expect(result).to.equal(false);
    });

  });

});