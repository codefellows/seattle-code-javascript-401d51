'use strict';

const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  arr.sort(compareYear)
}


function compareYear() {
  //do the thing
}

function sortTitle(arr) {
  arr.sort(compareTitle)
}


function compareTitle() {
  //do the thing
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle}
