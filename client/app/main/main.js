'use strict';

angular.module('postbuzzApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        'abstract': true,
        url: null,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
