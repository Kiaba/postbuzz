'use strict';

angular.module('postbuzzApp')
  .service('AccountService', function ($http) {
    this.get = function() {
      return $http.get('/api/user/info');
    }
  });
