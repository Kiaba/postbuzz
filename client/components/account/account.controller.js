'use strict';

angular.module('postbuzzApp')
  .controller('AccountCtrl', function ($scope) {
    $scope.message = 'Hello';
  })
  .controller('AccountGuestCtrl', function ($scope) {
    $scope.message = 'Hello';
  })
  .controller('AccountUserCtrl', function ($scope) {
    $scope.message = 'Hello';
  })
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
      console.log('AccountCtrl', arguments);
    });
  }])
