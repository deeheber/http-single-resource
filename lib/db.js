var data = require('../data');

var db = {};

db.parseURL = function(request, callback){

  //designing this so I can add more resource types later
  //currently it is just /notes
  //could also add more arrays to the data.js file for things such as /books, /bikes etc.

  var requestURL = request.url.split('/');
  var resource = requestURL[1];
  var id = requestURL[2];

  db.fetchAllItems(requestURL, resource, id, callback);
};

db.create = function(){

};

db.fetchAllItems = function(requestURL, resource, id, callback){

  if((resource) && (requestURL.length < 3) ){
    //return all items
    if(data[resource]){
      callback(JSON.stringify(data[resource]), 200);
    } else {
      db.errorMessage(callback);
    }
  }
  else if(requestURL.length < 4){
    //get individual item
    db.fetchSingleItem(resource, id, callback);
  }
  else {
    db.errorMessage(callback);
  }
};

db.fetchSingleItem = function(resource, id, callback){

  var item = data[resource][id-1];

  if(item){
    //return the item
    callback(JSON.stringify(item), 200);
  } else {
    db.errorMessage(callback);
  }
};

db.update = function(){

};

db.delete = function(){

};

db.errorMessage = function(callback){

  callback('Resource not found.', 400);
};

module.exports = db;
