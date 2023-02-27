'use strict';

module.exports = (payload) => {
  setTimeout(() => {
    console.log(`Hand: ${payload}`);
  }, 800);
};
