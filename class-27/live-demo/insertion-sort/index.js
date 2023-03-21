'use strict';

const insert = (sorted, value) => {
  let i = 0;
  while (value > sorted[i]) {
    i += 1;
  }
  while (i < sorted.length) {
    const temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i += 1;
  }
  sorted.push(value);
}

const insertionSort = (input) => {
  let sorted = [input[0]]
  for(let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
};

module.exports = insertionSort;
