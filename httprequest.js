// HTTP CLIENT EXCERCISE

var http = require('http');
http.get(process.argv[2], function (res) {
	res.setEncoding('utf8'); 
	res.on('error', function (e) {
		console.log("Got error: " + e.message);
	});
	res.on('data', function (data) {
		cosole.log(data);
	});
	res.on('end', function () {
		console.log('end recieved');
	});
	res.on('close', function (){
		console.log('close recieved');
	});
};
