
	var validationApp = angular.module('validationApp', []);

	validationApp.controller('mainController', function($scope) {
			
		$scope.submitForm = function() {

			if ($scope.userForm.$valid) {
				window.location = "index.html";
			}

		};

	});