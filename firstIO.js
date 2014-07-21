var fs = require('fs');
lines = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(lines);
