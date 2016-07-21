var db = {};


db.create = function(){

};

db.read = function(resource, id, callback){
  id = parseInt(id);
  if(id){
    //need to add error handler here if item doesn't exist
    callback(JSON.stringify(resource[id-1]));
  } else {
    //list all resources
    callback(JSON.stringify(resource));
  }

};

db.update = function(){

};

db.delete = function(){

};

module.exports = db;
