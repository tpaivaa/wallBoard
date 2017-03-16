var wallboard = angular.module('wallboard', []);

wallboard.service('pageContent',[ function(){
		this.fr = {
				headertext: 'Wallboard',
				contactsWaiting: 'APPELS EN ATTENTE',
				queBoxHeader: 'Clients',
				que:'+33388878866',
				queAgentStatus: 'Queue Agent Status',
				loggedIn: 'CONNECTE',
				readyToServe: 'DISPONIBLE',
				notReady: 'RETRAIT',
				busy: 'COM',
				loggedInSum: 0,
				readyToServeSum: 0,
				notReadySum: 0,
				busySum: 0
		};

		this.en = {
				headertext: 'Wallboard',
				contactsWaiting: 'Contacts Waiting',
				queBoxHeader: 'Contact Service queue',
				que:'+33388878866',
				queAgentStatus: 'Queue Agent Status',
				loggedIn: 'Logged in',
				readyToServe: 'Ready',
				notReady: 'Not ready',
				busy: 'Busy',
				loggedInSum: 0,
				readyToServeSum: 0,
				notReadySum: 0,
				busySum: 0
		};
		this.getData = function(language) {
				if (language === 'en') {
					return this.en;
				}
				else {
					return this.fr;
				}
		};


}]);


wallboard.controller('wallCtrl', ['$scope','$http','$timeout', '$location', 'pageContent', function ($scope,$http,$timeout,$location,pageContent) {
	$scope.site = location.search.split('site=')[1];
	$scope.details = {};
	mypageContent = pageContent.getData();
	getDataURL = '/wallboardData';

	if ($location.path() === '/en') {
		$scope.pageContent = pageContent.getData('en');
	}
	else {
		$scope.pageContent = pageContent.getData('fr');
	}

	if ($scope.site) {
		getDataURL = '/wallboardData?site=' + $scope.site;
	}
	else {
		getDataURL = '/wallboardData';
	}

	// Function to get the data
	$scope.getData = function (){
		$http.get(getDataURL)
		.then(function(response){ $scope.details = response.data; console.log($scope.details); });
	};

	// Function to replicate setInterval using $timeout service.
	$scope.intervalFunction = function(){
		$timeout(function() {
			$scope.getData();
			$scope.intervalFunction();
		}, 15 * 1000);
	};

	// Get first data
	$scope.getData();
	// Kick off the interval
	$scope.intervalFunction();
	console.log($scope.pageContent);
	console.log($scope.details);

}]);

