var http = require('http');
var db = require('./db');
var data = require('../data');

module.exports = http.createServer((request, response)=>{

  if(request.url === '/notes'){

    if(request.method === 'GET'){

      db.read(data.notes, result=>{
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(result);
        response.end();
      });

    }
  }
});
