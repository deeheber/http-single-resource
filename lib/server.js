var http = require('http');
var db = require('./db');

module.exports = http.createServer((request, response)=>{

  if(request.method === 'GET'){

    db.readAll(request, (result)=>{
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write(result);
      response.end();
    });

  } else {
    //error message for invalid URLs
    response.writeHead(400, {'Content-Type': 'text/plain'});
    response.write('Page not found');
    response.end();
  }
});
