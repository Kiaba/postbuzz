'use strict';

angular.module('postbuzzApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('account', {
        'abstract': true,
        url: null,
        parent: 'main',
        controller: 'AccountCtrl'
      })
      .state('account.guest', {
        'abstract': true,
        url: null,
        controller: 'AccountGuestCtrl',
		resolve: {
          account: function($q, $rootScope, AccountService) {
            return AccountService.get().then(function(response) {
              return response.data;
            }, function() {
              var deffered = $q.defer();
              deffered.resolve(null);
              return deffered.promise;
            });
          },
		  guest: function($q, $state, account) {
			if(account != null) {
				$state.go('user.info');
				return $q.reject();
			}
		  }
		},
        onEnter: function($rootScope, account) {
          $rootScope.account = (account == null) ? false: account;
        }
      })
      .state('account.user', {
        'abstract': true,
        url: null,
        controller: 'AccountUserCtrl',
		resolve: {
          account: function($q, $rootScope, AccountService) {
            return AccountService.get().then(function(response) {
              return response.data;
            }, function() {
              var deffered = $q.defer();
              deffered.resolve(null);
              return deffered.promise;
            });
          },
		  user: function($q, $state, account) {
			if(account == null) {
				$state.go('login');
				return $q.reject();
			}
		  }
		},
        onEnter: function($rootScope, account) {
          $rootScope.account = (account == null) ? false: account;
        }
      });
  });
