'use strict';

var app = require('../..');
var request = require('supertest');

describe('User API:', function() {

  describe('GET /api/user', function() {
    var users;

    beforeEach(function(done) {
      request(app)
        .get('/api/user')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          users = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      users.should.be.instanceOf(Array);
    });

  });

});
