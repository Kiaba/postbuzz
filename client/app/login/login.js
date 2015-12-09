'use strict';

angular.module('postbuzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        parent: 'account.guest',
        views: {
          '@main': {
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
          }
        }
      });
  });
