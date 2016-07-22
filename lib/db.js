var data = require('../data');

var db = {};


db.create = function(){

};

db.fetchAllItems = function(resource, callback){
  if(data[resource]){
    callback(null, JSON.stringify(data[resource]));
  } else {
    //trigger error
    callback('Resource not found');
  }

};

db.fetchSingleItem = function(resource, id, callback){
  var item = resource[id-1];

  if(resource.indexOf(item) !== -1){
    //return the item
    callback(JSON.stringify(resource[id-1]));
  } else {
    //error message
    callback('Resource not found.');
  }

};

db.update = function(){

};

db.delete = function(){

};

module.exports = db;
