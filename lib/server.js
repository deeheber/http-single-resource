var http = require('http');
var db = require('./db');
var handleResponse = require('./handleResponse');

module.exports = http.createServer((request, response)=>{

  if(request.method === 'GET'){

  //designing this so I can add more categories of items later

    var requestURL = request.url.split('/');
    var category = requestURL[1];
    var id = requestURL[2];

    if(requestURL.length === 2){
      //url is '/something'
      //retrieve all items within a specific category
      db.fetchAllItems(category, (error, result)=>{
        if(error){
          handleResponse.bad(error, response);
        } else {
          handleResponse.good(result, response);
        }
      });
    }
    else if(requestURL.length === 3){
      //url is '/something/something'
      //retrieve a single item
      db.fetchSingleItem(category, id, (error, result)=>{
        if(error){
          handleResponse.bad(error, response);
        } else {
          handleResponse.good(result, response);
        }
      });
    }
    else {
      //URL is too long or at the root
      handleResponse.bad('Resource not found', response);
    }
  } else {
    //not a GET request
    handleResponse.bad('Resource not found', response);
  }
});
