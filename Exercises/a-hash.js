'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380441112233',
  'Nero': '+380443332211',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
