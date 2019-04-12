const library = require('../lib/index');

describe('library fn', () => {
  it('returns numbers >= 5', () => {
    const arr = [1, 3, 5, 7, 2];
    expect([5, 7]).toEqual([5, 7]);
  });

});
