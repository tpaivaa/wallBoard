/*jshint esversion: 6 */
var wallboard = angular.module('wallboard', [])
wallboard.controller('wallCtrl', ['$scope','$http','$timeout','$location', function ($scope,$http,$timeout,$location) {
	$scope.headers = {};
	$scope.details = {};
	$scope.site = location.search.split('site=')[1];
	var styles = ['label-pill label-white', 'label-pill  label-success',' label-pill label-info',' label-pill label-warning','label-pill label-danger', ''];
	if ($scope.site) {
		getDataURL = '/wallboardData?site=' + $scope.site;
	}
	else {
		getDataURL = '/wallboardData';
	}

	var searchObject = $location.search();

	$scope.headers.main = {
		queue: 'Jonot',
		agents: 'Asiakaspalvelijat',
		clients: 'Asiakkaat',
		waitTimes: 'Jonotus ajat'
	}
	$scope.headers.que = {
		available: 'Läsnä',
		ready: 'Valmiina',
		notReady: 'Poissa',
		busy: 'Varattuna',
		waiting: 'Jonossa',
		longestWait: 'Pisin',
		avgWait: 'Keskiarvo'
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

	$scope.pillColor = function(count, wait, key) {
  	
  	if (wait === 'true') { return styles[0] }
  	if (key === 'Varasto') { return styles[5] }
  	else if (count < -1)
  		style = styles[1];
  	else if (5 <= count  && count <= 15)
  		style = styles[3];
  	else if (count > 15)
  		style = styles[4];
  	else
  		style = styles[0];
  	return style;
  };
  $scope.waitColor = function(count, wait, key) {
  	if (key==='Varasto') {return styles[5]}
  	else if (count > 90) { style = styles[4]; }
  	else {style = styles[0];}
  	return style;
  	}
  $scope.agentPillColor = function(count, wait, key) { if(key === 'Varasto') {return styles[5] } else {return styles[0]} }

	$scope.detailsLength = function() {
		return (100 / (Object.keys($scope.details).length+2));
	}
	$scope.isRed = function(key) {
		if (key==='Tilaukset') { return 'red'} 
	}
	$scope.labelPill = function(key) { if (key==='Varasto') { return ''} else { return 'label-pill'}  } 

}]);