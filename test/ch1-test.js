var expect = require('chai').expect;
var ChapterOne = require('../src/ch1');

describe('Chapter 1', () => {
  beforeEach(() => {
    chapter = new ChapterOne()
  })
  it('should be true', () => {
    expect(chapter.isTrue).to.be.true
  })
})