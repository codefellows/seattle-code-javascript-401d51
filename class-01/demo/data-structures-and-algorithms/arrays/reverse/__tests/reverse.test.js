'use strict';

let reverseArray = require('../reverse.js');

describe("Array Reverse", () => {
  
  it('Reverses an array', () => {
    let expected = [10,8,6,4,2];
    let myNumbers = [2, 4, 6, 8, 10];
    reverseArray(myNumbers);
    expect(myNumbers).toEqual(expected);
  });
  
})
