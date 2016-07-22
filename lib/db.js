var data = require('../data');

var db = {};


db.create = function(){

};

db.fetchAllItems = function(resource, callback){
  if(data[resource]){
    //category exists
    callback(null, JSON.stringify(data[resource]));
  } else {
    //category doesn't exist
    callback('Resource not found');
  }
};

db.fetchSingleItem = function(resource, id, callback){
  var category = data[resource];

  if(category){
  //the type category exists in data
    if(category[id-1]){
      //the item within that category exists
      callback(null, JSON.stringify(category[id-1]));
    } else {
      //the item within that category doesn't exist
      callback('Resource not found.');
    }
  } else {
  //category doesn't exist in data
    callback('Resource not found.');
  }
};

db.update = function(){

};

db.delete = function(){

};

module.exports = db;
