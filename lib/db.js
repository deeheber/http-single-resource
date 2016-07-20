var db = {};


db.create = function(){

};

db.read = function(resource, callback){
  callback(JSON.stringify(resource));
};

db.update = function(){

};

db.delete = function(){

};

module.exports = db;
