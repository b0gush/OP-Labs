'use strict';

const fn = () => {
  const obj1 = { name: 'Ann' };
  let obj2 = { name: 'Bob' };


  obj1.name = 'Anna';
  obj2.name = 'Boris';

  obj2 = { name: 'Max' };
  
  console.log(obj1, obj2);

};

module.exports = { fn };
