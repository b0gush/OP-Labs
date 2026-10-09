'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Julius Caesar', phone: '+380441112233' },
  { name: 'Nero', phone: '+380443332211' },
];

const findPhoneByName = (name) => {
  for (const p of phonebook) {
    if (p.name === name) return p.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
