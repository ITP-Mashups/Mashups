

var app = {
	nyTimesArticles : [],
	flickrData : [],

	initialize: function() {
		app.getNYTimesData();
	},

	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < app.nyTimesArticles.length; i++){
			theHTML += "<div class='flickrArticle'>";
			theHTML += "<h3>" + app.nyTimesArticles[i].headline.main + "</h3>";
			theHTML += "<img src='" + app.flickrData[i].url_o + "'/>";
			theHTML += "</div>";
		}
		$('main').html(theHTML);
	},

	getFlickrData: function(currentWord){
		//console.log("Get Flickr Data");
		var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_o&text=";
		var currentSearchWord = "apple";
		var myFlickrKey = '&api_key=' + 'YOUR API KEY';
		
		var flickrReqURL = flickrURL + currentSearchWord + myFlickrKey;

		$.ajax({
			url: flickrReqURL,
			type: 'GET',
			dataType: 'json',
			error: function(err){
				console.log(err);
			},
			success: function(data){
				console.log("WooHoo!");
				//console.log(data);
				var tempFlickrData = data.photos.photo;
				console.log(tempFlickrData);
				
				for (var i = 0; i < tempFlickrData.length; i++){
				//	debugger;
					if (tempFlickrData[i].url_o){
						app.flickrData.push(tempFlickrData[i]);
					}
				}

				// tempFlickrData.forEach(function(fD){
				// 	if(fD.url_o){
				// 		app.flickrData.push(fD);
				// 	}
				// });

				console.log(app.flickrData);
				app.makeHTML();
			}
		});

	},

	getNYTimesData: function() {
		console.log("Get NY Times Data");
		var currentSearchWord = 'apple';
		var nyTimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + currentSearchWord + '&page=0&sort=newest&api-key=';
		var myNYKey = 'YOUR API KEY';
		var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nyTimesReqURL);
		$.ajax({
			url: nyTimesReqURL,
			type: 'GET',
			dataType: 'json',
			error: function(err){
				console.log("Uh oh...");
				console.log(err);
			},
			success: function(data){
				//console.log(data);
				app.nyTimesArticles = data.response.docs;
				console.log(app.nyTimesArticles);
				app.getFlickrData();
			}
		});
	}



};