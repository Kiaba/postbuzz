'use strict';

angular.module('postbuzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        'abstract': true,
        url: '/user',
        parent: 'account.user'
      })
      .state('user.info', {
        url: '/info',
        views: {
          '@main': {
            templateUrl: 'app/user/user.info.html',
            controller: 'UserInfoCtrl'
          }
        }
      })
  });
