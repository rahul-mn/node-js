const path = require('path');

console.log(path.sep);
const filePath = path.join('/home', 'zeeve', 'test', '.cfg')
console.log(filePath);

const base = path.basename(filePath)

console.log(base);

const absolute = path.resolve(__dirname, 'home', 'zeeve', 'test', '.cfg')
console.log(absolute);