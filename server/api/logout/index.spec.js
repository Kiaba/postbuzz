'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var logoutCtrlStub = {
  index: 'logoutCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var logoutIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './logout.controller': logoutCtrlStub
});

describe('Logout API Router:', function() {

  it('should return an express router instance', function() {
    logoutIndex.should.equal(routerStub);
  });

  describe('GET /api/logout', function() {

    it('should route to logout.controller.index', function() {
      routerStub.get
        .withArgs('/', 'logoutCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
