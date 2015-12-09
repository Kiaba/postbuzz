'use strict';

angular.module('postbuzzApp')
  .controller('LogoutCtrl', function ($state, $rootScope, logout) {
    $rootScope.account = null;
    
    return $state.go('login');
  });
