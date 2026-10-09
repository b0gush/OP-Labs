'use strict';

function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = random(characters.length - 1);
    key = key + characters[index];
  }
  return key;
}

module.exports = { generateKey };