//Modules

const names = require('./4-names');
const sayHi = require('./5-util');
const data = require('./6-exporting-method');
require('./7-ganit')

console.log(data.items[0]);
console.log(names.john);
sayHi(names.peter);
sayHi(`Rahul`)