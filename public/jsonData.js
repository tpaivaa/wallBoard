/*jshint esversion: 6 */

let rdm = function(amount) {
	return  Math.floor((Math.random() * amount) + 1);
}

let  data =  {"Asiakaspalvelu":
				{"loggedIn":rdm(8),"notReadyResources":rdm(18) ,"readyResources":rdm(8),"busy":rdm(5),"waiting":rdm(25),"longestWait":rdm(80),"waitTime":rdm(99)},
			"Aulapalvelu":
				{"loggedIn":rdm(8),"notReadyResources":rdm(7),"readyResources":rdm(8),"busy":rdm(89),"waiting":rdm(8),"longestWait":rdm(8),"waitTime":rdm(118)},
			"Lomapalvelu":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(100),"busy":rdm(99),"waiting":rdm(11),"longestWait":rdm(21),"waitTime":rdm(10)},
			"Muu palvelu":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(16),"waitTime":rdm(10)},
			"Keittiö":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(32),"waitTime":rdm(43)},
			"Kokous varaukset":
				{"loggedIn":rdm(8),"notReadyResources":rdm(2),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(23),"waitTime":rdm(10)},
			"Tilaukset":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(332),"waitTime":rdm(10)},
			"Varasto":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(23),"waitTime":rdm(10)},
			"Valittajat":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(18),"waitTime":rdm(8)},
			"Reklamaatiot":
				{"loggedIn":rdm(8),"notReadyResources":rdm(4),"readyResources":rdm(2),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(10),"waitTime":rdm(10)},
			"Katteet":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(10),"waitTime":rdm(10)},
			"Naulat":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(10),"waitTime":rdm(10)},
			"Istutukset":
				{"loggedIn":rdm(8),"notReadyResources":rdm(3),"readyResources":rdm(3),"busy":rdm(6),"waiting":rdm(11),"longestWait":rdm(34),"waitTime":rdm(8)}}
				
module.exports = data