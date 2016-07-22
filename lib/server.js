var http = require('http');
var db = require('./db');

module.exports = http.createServer((request, response)=>{

  if(request.method === 'GET'){

  //designing this so I can add more resource types later
  //currently it is just /notes
  //could also add more arrays to the data.js file for things such as /books, /bikes etc.

    var requestURL = request.url.split('/');
    var resource = requestURL[1];
    var id = requestURL[2];

    if((resource) && (requestURL.length === 2) ){
      //get all items of a specific resource type
      db.fetchAllItems(resource, (error, result)=>{
        if(error){
          //error
          response.writeHead(400, {'Content-Type': 'text/plain'});
          response.write(error);
          response.end();
        } else {
          //print all items of a specific resource type
          response.writeHead(200, {'Content-Type': 'text/plain'});
          response.write(result);
          response.end();
        }
      });

    }
    else if(requestURL.length === 3){
      //get a single item
      db.fetchSingleItem(resource, id, (error, result)=>{
        if(error){
          //error
          response.writeHead(400, {'Content-Type': 'text/plain'});
          response.write(error);
          response.end();
        } else {
          //print single item
          response.writeHead(200, {'Content-Type': 'text/plain'});
          response.write(result);
          response.end();
        }
      });
    }

    else {
      response.writeHead(400, {'Content-Type': 'text/plain'});
      response.write('Resource not found');
      response.end();
    }

  } else {
    //error message for non GET requests
    response.writeHead(400, {'Content-Type': 'text/plain'});
    response.write('Page not found');
    response.end();
  }
});
