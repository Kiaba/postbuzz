'use strict';

angular.module('postbuzzApp')
  .controller('LoginCtrl', function ($state, $scope, FormService, LoginService) {
	  
	$scope.error = null;
	  
    $scope.username = null;
	$scope.password = null;
	
	$scope.login = function(username, password) {
		$scope.form.$setSubmitted();
		
		if($scope.form.$invalid) {
			return;
		}
		
		return LoginService.login(username, password).then(function(response) {
			var data = response.data;
			if(data.error) {
				$scope.error = "Incorrect login or password";
				return;
			}
			return $state.reload();
		});
	}
	
	$scope.hasError = FormService.hasError;
  });
