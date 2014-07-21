var fs = require('fs');
fs.readFile(process.argv[2], function (err, buffer) {
	if (err) {
		console.error(err.stack);
		return;
	}
	console.log(buffer.toString().split('\n').length);
});
