/*
Modified from:
NYU - MASHUPS CLASS
gihtub.com/craigprotzel/Mashups

WIKIPEDIA SEARCH - EXAMPLE #3
Wikipedia API Reference - http://www.mediawiki.org/wiki/API:Main_page

This example will search Wikipedia for a user submitted entry
And then populate those results on the page using the jQuery 'append' function
*/

var app = {
	wikiURL: "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=",

	initialize: function() {
		//Use jQuery to assign a callback function when the 'search' button is clicked
		$("#search").click(function(){
			console.log("Clicked search");
			//Clear the div
			$("#resultsTarget").html("");
			//Use jQuery to get the value of the 'query' input box
			var newSearchTerm = $("#query").val();
			console.log(newSearchTerm);
			//Execute the Wikipedia API call with the 'newSearchTerm' string as its argument 
			app.searchWikipedia(newSearchTerm);
		});

		//What if someone just wants to click "ENTER"?
		//Use jQuery to assign a callback function when enter is pressed 
		//This will ONLY work when the 'query' input box is active
		$("#query").keypress(function(e){
			//console.log(e);
			//If enter key is pressed
			if (e.which == 13){
				//Use jQuery's trigger() function to execute the click event
				$("#search").trigger('click');
			}
		});
	},

	searchWikipedia: function(searchTerm) {
		$.ajax({
			url: this.wikiURL + searchTerm,
			type: 'GET',
			dataType: 'jsonp',
			error: function(data){
				console.log("We got problems");
				//console.log(data.status);
			},
			success: function(data){
				console.log("WooHoo!");
				//Check the browser console to see the returned data
				console.log(data);
				//Use jQuery to insert the search term into the appropriate DOM element
				//The data we want is the first item in the returned JSON, hence value "0"
				$("#searchTerm").html(data[0]);

				//The results data we want is the second item in the returned JSON, hence value "1"
				//Create a var to save the array of search results 
				var searchResults = data[1];
				var urlResults = data[3];
				//Loop through the array of results
				for (var i = 0; i < searchResults.length; i++){
					var htmlString =	"<p class='wikiResults'>" +
											"<a href=" + urlResults[i] + ">" + searchResults[i] + "</a>" +
										"</p>";
					//Use jQuery's append() function to add the searchResults to the DOM
					$("#resultsTarget").append(htmlString);
				}
			}
		});
	}
}


//Code to be executed once the page has fully loaded
$(document).ready(function(){
	console.log("LOADED!!!!");
	app.initialize();
});		
