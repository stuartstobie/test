var modularfun = require('./modularfun');
modularfun.(process.argv[2], process.argv[3], function (err, data){
	if(err) {
		console.error(err.stack);
		return;
	}
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
});
