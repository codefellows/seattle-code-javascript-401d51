'use strict';

module.exports = (payload) => {
  setTimeout(() => {
    console.log('Pupils:  Dilation update: ', payload);
  }, 1000);
};
