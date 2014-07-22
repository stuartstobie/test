var fs = require('fs');
module.exports = function (path, filter, callback){
	var data;
	fs.readdir(path, function (err, list) {
		if (err) {
			console.error(err.stack);
			return callback(err);
		}
		var files =[];
		for (var i = 0; i < list.length; i++) {
			var entry = list[i].split('.');
			if (entry.length > 1 && entry[1] == filter) {
				files.push(list[i]);
			}
		}
		callback(null, files);
	});
}
