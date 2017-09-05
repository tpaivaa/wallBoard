/*jshint esversion: 6 */
var wallboard = angular.module('wallboard', [])
wallboard.controller('wallCtrl', ['$scope','$http','$timeout','$location', function ($scope,$http,$timeout,$location) {
	$scope.headers = {};
	$scope.details = {};
	$scope.site = location.search.split('site=')[1];
	
	var styles1 = [{"background-color":"white"},{"background-color":"red"}];
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

	$scope.headers.left = {
		available: 'Läsnä',
		ready: 'Valmiina',
		notReady: 'Vaiheessa',
		busy: 'Varattuna',
		waiting: 'Jonottaa',
		longestWait: 'Jonossa (s)',
		avgWait: 'Odotusaika',
		currentWait: 'Jonotusaika'
	}

	$scope.headersit = [
		"Aspa",
		"Esit",
		"Ca",
		"Yrit",
		"Ospa",
		"Kuus",
		"KK",
		"Tre",
		"SS",
		"Salla",
		"Saimaa"
	]
	
	// Function to get the data
	$scope.getData = function (){
		$http.get(getDataURL)
		.then(function(response){ 
			$scope.details = response.data;
			$scope.waitColorAsiakaspalvelu = styles1[1];
		});
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
  $scope.waitColor1 = function(queue) {
  	if (details[queue].waiting > 4) {
  		return styles1[1];
  	}
  };
  $scope.agentPillColor = function(count, wait, key) { if (key === 'Varasto') {return styles[5] } else {return styles[0]} }

	$scope.detailsLength = function() {
		return (100 / (Object.keys($scope.details).length+2));
	}
	$scope.isRed = function(key) {
		if (key==='Tilaukset') { return 'red'} 
	}
	$scope.labelPill = function(key) { if (key==='Varasto') { return ''} else { return 'label-pill'}  } 

}]);


wallboard.controller('horCtrl', ['$scope','$http','$timeout','$location', function ($scope,$http,$timeout,$location) {
	var log = console.log;
	var hcrStyles = ['t-danger', 't-headsup', 't-normal'];
	$scope.headersit = []	
	$scope.headers = {}
	$scope.headers.left = {
		available: 'Läsnä',
		ready: 'Valmiina',
		notReady: 'Vaiheessa',
		busy: 'Varattuna',
		waiting: 'Jonottaa',
		longestWait: 'Jonossa (s)',
		avgWait: 'Odotusaika'
	}
	$scope.border = 1

	var blinkHeader = function(value) {
		if (value) {
			$scope.myStyle = {'background-color':'green'}
		}
		else {
			$scope.myStyle = {'background-color':'red'}
		}
	}

	$scope.myStyle = {'background-color':'white'};

	if ($scope.site) {
		getDataURL = '/horData?site=' + $scope.site;
	}
	else {
		getDataURL = '/horData';
	}

	$scope.headerstyle = function(que) {
		return 'myStyle';
	} 
		// Function to get the data
	$scope.getData = function (){
		$http.get(getDataURL)
		.then(function(response){
			heds = [];
			$scope.hordetails = response.data;
			$scope.headersit = headersData(response.data)
		});
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

	$scope.headersit = $scope.hordetails


	var headersData = function (data) {
		let heds = []
		for(let n in data){
				heds.push(n)
			}
		return heds
	}

	$scope.queStatus = function (que, value, type){
		// Tsekataan onko jonon tila akuutti ja tarviiko korostaa näkymää
		// jos on palautetaan css class jolla saa näkymään väriä
		//log('in que status:', que, value, type);
		log('Hodedetailit: ', que ,$scope.hordetails[que]);
		if (que === 'Aspa') {
			if($scope.hordetails[que].waiting > 9 || $scope.hordetails[que].waitTime >= 80) {
				blinkHeader(true);
				return hcrStyles[0];
			}
		}
		else if (que === que) {
			if($scope.hordetails[que].waiting > 9 || $scope.hordetails[que].waitTime >= 80) {
				//blinkHeader(true);
				return hcrStyles[0];
			}
		}

		if (que === 'Esit') {
			if(type === 'waiting' && value > 9 || type === 'waitTime' && value >= 80) {
				return hcrStyles[0];
			}
		}
		if (que === 'Ca') {
			if(type === 'waiting' && value > 9 || type === 'waitTime' && value >= 80) {
				return hcrStyles[0];
			}
		}
		if (que === 'Yrit') {
			if(type === 'waiting' && value > 9 || type === 'waitTime' && value >= 80) {
				return hcrStyles[0];
			}
		}
		if (que === 'Ospa') {
			if(type === 'waiting' && value > 9 || type === 'waitTime' && value >= 80) {
				return hcrStyles[0];
			}
		}
		if (que === 'Kuus') {
			if(type === 'waiting' && value > 9 || type === 'waitTime' && value >= 80) {
				return hcrStyles[0];
			}
		}
		if (que === 'KK') {
			if(type === 'waiting' && value > 9 || type === 'waitTime' && value >= 80) {
				return hcrStyles[0];
			}
		}

		// palauttaa perus sisällön
		else { 
			blinkHeader(false);
			return hcrStyles[2] }
	}
	

}])



angular.element(function() {
      angular.bootstrap(document, ['wallboard']);
    });