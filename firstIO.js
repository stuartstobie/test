var fs = require('fs');
// var file = process.argv[2];
// var buffer = fs.readFileSync(file);
// var string = buffer.toString();
// var array = string.split('\n');
// var lines = array.length - 1
var lines = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(lines);
