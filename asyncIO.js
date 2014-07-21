var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function (err, buffer) {
	if (err) {
		console.error(err.stack);
		return;
	}
	var lines = buffer.toString().split('\n').length;
	console.log(lines);
});
