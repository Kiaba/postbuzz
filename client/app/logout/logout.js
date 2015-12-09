'use strict';

angular.module('postbuzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logout', {
        url: '/logout',
        parent: 'account.user',
        resolve: {
          logout: function(LogoutService) {
            return LogoutService.logout();
          }
        },
        views: {
          '@main': {
            templateUrl: 'app/logout/logout.html',
            controller: 'LogoutCtrl'
          }
        }
      });
  });