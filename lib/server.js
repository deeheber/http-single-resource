var http = require('http');
var db = require('./db');

module.exports = http.createServer((request, response)=>{

  if(request.method === 'GET'){

    db.parseURL(request, (result, statusCode)=>{
      response.writeHead(statusCode, {'Content-Type': 'text/plain'});
      response.write(result);
      response.end();
    });

  } else {
    
    //error message for non get requests
    response.writeHead(400, {'Content-Type': 'text/plain'});
    response.write('Page not found');
    response.end();
  }

});
