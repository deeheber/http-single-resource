var db = require('../lib/db');
const assert = require('chai').assert;

var resource = 'notes';
var id = '2';

var allNotes = '[{"noteBody":"note1"},{"noteBody":"note2"},{"noteBody":"note3"}]';
var note2 = '{"noteBody":"note2"}';

describe('database', ()=>{
  it('gets all notes', done=>{
    db.fetchAllItems(resource, (error, result)=>{
      if (error) return done(error);
      assert.equal(result, allNotes);
      done();
    });
  });

  it('gets note 2', done=>{
    db.fetchSingleItem(resource, id, (error, result)=>{
      if (error) return done(error);
      assert.equal(result, note2);
      done();
    });
  });
});
