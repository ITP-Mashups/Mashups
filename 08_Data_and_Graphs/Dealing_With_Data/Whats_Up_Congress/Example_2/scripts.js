var app = {

	myKey :	'F0XqUcS8HkuRGJZXzXyWLJDIY26KlEB0IAMqZ4hn',
	WUC : {},
	getCongressData: function() {
		//Create necessary date structure for AJAX request
		var today = new Date();
		//Convert it into the YYYY-MM-DD format
		var dd = today.getDate();
		if (dd < 10){
			dd = 0 + dd.toString();
		}
		var mm = today.getMonth()+1;  //getMonth is zero based
		if (mm < 10){
			mm = 0 + mm.toString();
		}
		var yyyy = today.getFullYear();
		//Construct string
		var queryDay = yyyy + '-' + mm + '-' + dd;
		// Using today's day
		var congressURL = 'http://congress.api.sunlightfoundation.com/floor_updates?legislative_day=' + queryDay + '&apikey=' + app.myKey;
		// Using a different date to get more data
		congressURL = 'https://api.propublica.org/congress/v1/senate/floor_updates/2017/05/02.json';
		//Make AJAX request
		$.ajaxSetup({
			beforeSend: 
			function(xhr) {	
				xhr.setRequestHeader("X-API-Key", app.myKey)
			},
		});

		$.ajax({
			url: congressURL,
			type: 'GET',
			dataType: 'json',
			error: function(data){
				console.log("We got problems");
				console.log(data.status);
			},
			success: function(data){
				//console.log("WooHoo!");
				console.log(data);

				app.WUC.today = data.results;
				//console.log(app.WUC.today);

				//Run Data Parsing Function
				app.parseData();

				//Run Data ID Parsing + Second Request
			//	app.parseForID();
			}
		});
	},

	parseData: function() {	
		//Underscore EACH
		_.each(app.WUC.today, function(el){
			console.log(el);
		});

		//Pull Out updates using EACH and PUSH
		var allUpdates = [];
		_.each(app.WUC.today, function(el){
			allUpdates.push(el.floor_actions);
		});
		//console.log(allUpdates);

		//Alt method using Underscore PLUCK
		var updates = _.pluck(app.WUC.today, 'floor_actions');
		updates = updates[0];
		var descriptions = _.pluck(updates, 'description');
		console.log(descriptions);
		//Add the updates to the page
		// _.each(updates, function(el){
		// 	$('#congressData').append("<p>" + el + "</p>");
		// });

		//Or
		app.addToPage(descriptions);

		//Underscore MAP
		//Samuel L. Jackson-ify the Updates
		var sljUpdates = _.map(descriptions, function(el){
			//return  el + " Godammit";
			//return el.replace(".", " Godammit! ");
			//return el.replace(/./, " Godammit! ");
			//return el.replace(/\./, " Godammit! ");
			return el.replace(/\.$/, " GODDAMIT!");
		});
		// console.log(sljUpdates);
		app.addToPage(sljUpdates);
		// _.each(sljUpdates, function(el){
		// 	$('#congressData').append("<p>" + el + "</p>");
		// });

		//Create an array of words for each update
		//Use EACH + PUSH
		var allWords = [];
		_.each(descriptions, function(el){
			allWords.push(el.split(" "));
		});
		console.log(allWords);
		debugger;
		//Use map
		var updateWords = _.map(descriptions, function(el){
			return el.split(" ");
		});
		//console.log(updateWords);

		//Find common words
		var commonWords = _.intersection(updateWords[2], updateWords[4]);
		//console.log(commonWords);

		//Create a single array using FLATTEN
		var flatArray = _.flatten(updateWords);
	//	console.log(flatArray);

		//Remove duplicates using UNIQ
		var uniqueWords = _.uniq(flatArray);
		console.log(uniqueWords);
	},

	addToPage: function(pageData) {
		_.each(pageData, function(el){
			$('#congressData').append("<p>" + el + "</p>");
		});
	},

	parseForID: function() {
		//First determine how many there are
		_.each(app.WUC.today, function(obj){
			if (obj.legislator_ids.length !== 0){
				console.log("Found one!");
				//Add the total number of ids to the async counter
				app.WUC.asyncCount += obj.legislator_ids.length;
				//For wach id, request info
				_.each(obj.legislator_ids, function(el){
					//Make request for personal info
					app.makeInfoRequest(el, obj);
				});
			}
		});
		console.log(app.WUC.asyncCount);

	},

};


$(document).ready(function(){
	//Make request to Sunlight Congress API
	app.getCongressData();
});