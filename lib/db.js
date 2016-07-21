var data = require('../data');

var db = {};


db.create = function(){

};

db.readAll = function(request, callback){
  //seperate out this into another function called parse request???
  var requestURL = request.url.split('/');
  var resource = requestURL[1];
  var id = requestURL[2];

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
    db.readItem(resource, id, callback);
  }
  else {
    db.errorMessage(callback);
  }

};

db.readItem = function(resource, id, callback){
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
