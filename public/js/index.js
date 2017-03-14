var wallboard = angular.module('wallboard', [])
wallboard.controller('wallCtrl', ['$scope','$http','$timeout','$location', function ($scope,$http,$timeout,$location) {
	$scope.details = {};
	$scope.site = location.search.split('site=')[1];
	
	
	
	if ($scope.site) {
		getDataURL = '/wallboardData?site=' + $scope.site;
	}
	else {
		getDataURL = '/wallboardData';
	}
	

	// Function to get the data
	$scope.getData = function (){
		$http.get(getDataURL)
		.then(function(response){ $scope.details = response.data; });
	}

	// Function to replicate setInterval using $timeout service.
	$scope.intervalFunction = function(){
		$timeout(function() {
			$scope.getData();
			$scope.intervalFunction();
		}, 15 * 1000)
	};

	// Get first data
	$scope.getData();
	// Kick off the interval
	$scope.intervalFunction();

}]);

