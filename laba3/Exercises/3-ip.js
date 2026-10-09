'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parts = ip.split('.').map(Number);
  return parts.reduce((res, byte) => (res << 8) + byte, 0);
};

module.exports = { ipToInt };