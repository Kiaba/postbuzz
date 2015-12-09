'use strict';

var app = require('../..');
var request = require('supertest');

describe('Logout API:', function() {

  describe('GET /api/logout', function() {
    var logouts;

    beforeEach(function(done) {
      request(app)
        .get('/api/logout')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          logouts = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      logouts.should.be.instanceOf(Array);
    });

  });

});
