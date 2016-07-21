const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const server = require('../lib/server');
var data = require('../data');

chai.use(chaiHttp);

describe('http-server', ()=>{

  const request = chai.request(server);

  it('gets all notes', done=>{
    request.get('/notes')
      .end((error, response)=>{
        if(error)return done(error);
        assert.equal(response.text, JSON.stringify(data.notes));
        done();
      });
  });

  it('gets note 1', done=>{
    request.get('/notes/1')
      .end((error, response)=>{
        if(error)return done(error);
        assert.equal(response.text, JSON.stringify(data.notes[0]));
        done();
      });
  });

  it('errors on a note that doesn\'t exist', done=>{
    request.get('/notes/10000')
      .end((error, response)=>{
        //if(error)return done(error);
        assert.equal(response.status, 400);
        done();
      });
  });

  it('Error 400 invalid resource type', done=>{
    request.get('/fakepage')
      .end((error, response)=>{
        assert.equal(response.statusCode, 400);
        done();
      });
  });

  it('Error on POST method', done=>{
    request.post('/notes')
      .end((error, response)=>{
        assert.equal(response.text, 'Page not found');
        done();
      });
  });
});
