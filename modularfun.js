var fs = require('fs');
exports.filter = function (path, filter) {
	var files = [];
	fs.readdir(process.argv[2], function (err, list) {
		if (err) {
			console.error(err.stack);
			return;
		}
		console.log(list.length)
		for (var i = 0; i < list.length; i++) {
			var entry = list[i].split('.');
			console.log(entry[0] + " " + entry[1]);
			if (entry.length > 1 && entry[1] == filter) {
				console.log(i);
				files.push(list[i]);
				console.log[files];
			}
		}
	});
	return files;
}
