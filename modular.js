var modularfun = require('./modularfun');
var list = modularfun.filter(process.argv[2], process.argv[3]);
console.log(list);
