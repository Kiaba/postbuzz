'use strict';

angular.module('postbuzzApp', [
  'postbuzzApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/login');

    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope) {
	$rootScope.account = null;
  })