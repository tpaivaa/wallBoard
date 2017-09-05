/*jshint esversion: 6 */

let rdm = function(amount) {
	return  Math.floor((Math.random() * amount) + 1);
}

let  data =  {"Asiakaspalvelu":
				{"loggedIn":rdm(8),"notReadyResources":rdm(18) ,"readyResources":rdm(8),"busy":rdm(5),"waiting":rdm(25),"longestWait":rdm(80),"waitTime":rdm(99),"currentWait":rdm(10)},
			"Esittely":
				{"loggedIn":rdm(8),"notReadyResources":rdm(7),"readyResources":rdm(8),"busy":rdm(16),"waiting":rdm(28),"longestWait":rdm(8),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Caribia":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(19),"busy":rdm(19),"waiting":rdm(11),"longestWait":rdm(21),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Yritys":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(16),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Osakaspalvelu":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(32),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Kuusamo":
				{"loggedIn":rdm(8),"notReadyResources":rdm(2),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(23),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Katinkulta":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(332),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Tampere":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(23),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Saariselka":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(18),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Salla":
				{"loggedIn":rdm(8),"notReadyResources":rdm(4),"readyResources":rdm(2),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(10),"waitTime":rdm(100),"currentWait":rdm(10)},
			"Saimaa":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(10),"waitTime":rdm(100),"currentWait":rdm(10)}}
				
module.exports = data