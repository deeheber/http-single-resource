var db = require('../lib/db');
var books = require('../data').books;
const assert = require('chai').assert;

var category = 'books';
var id = '1';

describe('database', ()=>{
  it('gets all books', done=>{
    db.fetchAllItems(category, (error, result)=>{
      if (error) return done(error);
      assert.equal(JSON.parse(result).length, 4);
      done();
    });
  });

  it('gets book 1', done=>{
    db.fetchSingleItem(category, id, (error, result)=>{
      if (error) return done(error);
      assert.deepEqual(JSON.parse(result), books[0]);
      done();
    });
  });
});