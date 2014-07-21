var fs = require('fs');
var file = process.argv[2];
var buffer = fs.readFileSync(file);
var string = buffer.toString();
var array = string.split('\n');
lines = array.length - 1

console.log(lines);
