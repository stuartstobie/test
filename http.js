var http = require('http');

http.get(process.argv[2], function (response) {
  res.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
});