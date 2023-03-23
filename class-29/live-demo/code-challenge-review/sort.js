'use strict';

const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  return arr.sort(compareYear);
}


function compareYear(a, b) {
  //do the thing
  return b.year - a.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle)
}


function compareTitle(a, b) {
  //do the thing
  a = a.title.replace('The ', '');
  b = b.title.replace('The ', '');
  return a.localeCompare(b);
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle}
