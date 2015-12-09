'use strict';

var app = require('../..');
var request = require('supertest');

describe('Login API:', function() {

  describe('GET /api/login', function() {
    var logins;

    beforeEach(function(done) {
      request(app)
        .get('/api/login')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          logins = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      logins.should.be.instanceOf(Array);
    });

  });

});
