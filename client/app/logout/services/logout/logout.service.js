'use strict';

angular.module('postbuzzApp')
  .service('LogoutService', function ($http) {
    this.logout = function() {
      return $http.get('./api/logout');
    }
  });
