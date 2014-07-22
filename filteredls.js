var fs = require('fs');
fs.readdir(process.argv[2], function (err, list) {
	if (err) {
		console.error(err.stack);
		return;
	}
	for (var i = 0; i < list.length; i++) {
		var entry = list[i].split('.');
		if (entry.length > 1 && entry[1] == process.argv[3]) {
			console.log(list[i]);
		}
	};
});
