'use strict';

describe('Service: LogoutService', function () {

  // load the service's module
  beforeEach(module('postbuzzApp'));

  // instantiate service
  var LogoutService;
  beforeEach(inject(function (_LogoutService_) {
    LogoutService = _LogoutService_;
  }));

  it('should do something', function () {
    expect(!!LogoutService).toBe(true);
  });

});
