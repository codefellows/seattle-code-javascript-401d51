'use strict';

const reverse = (list) => {
  let start = 0;
  let end = list.length - 1;
  while (start <= end) {
    let temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }

  // Not returning because ... in 201 we learned about
  // passing by reference vs passing by value
}

module.exports = reverse;