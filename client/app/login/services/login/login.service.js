'use strict';

angular.module('postbuzzApp')
  .service('LoginService', function ($http) {
    this.login = function(username, password) {
		return $http.post('./api/login', {
			data: {
				'username': username,
				'password': password
			}
		})
	}
  });
