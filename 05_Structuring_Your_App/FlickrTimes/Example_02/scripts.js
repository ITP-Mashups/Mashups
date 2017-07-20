var app = {
	initialize: function() {
		app.getNYTimesData();
	},

	getNYTimesData: function() {
		console.log("Getting NY Times Data");

		var nyTimesURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=0&sort=newest&api-key=";
		var myNYTimesAPIKey = "cc1de15c771047dab592e892dd6faa54";
		var nyTimesReqURL = nyTimesURL + myNYTimesAPIKey;

		$.ajax({
			url: nyTimesReqURL,
			type: 'GET',
			dataType: 'json',
			error: function(err){
				console.log(err);
			},
			success: function(data){
				console.log("Got the data");
				console.log(data);
				var theArticles = data.response.docs;
				console.log(theArticles);

				//Clear out the container
				$('#new-container').html("");

				for (var i = 0; i < theArticles.length; i++){
					app.getFlickrData(theArticles[i]);
				}
			}
		});
	},

	getFlickrData: function(theNYTObj) {
		console.log("Get Flickr Data");

		var theTerm = theNYTObj.section_name || 'news';

		var flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=';
		var flickrKey = '22ca0f0cddec6dbdcd284379a4473569';
		var flickrQueryParams = '&text=' + theTerm + '&format=json&nojsoncallback=1&extras=url_o';
		var flickrReqURL = flickrURL + flickrKey + flickrQueryParams;

		$.ajax({
			url: flickrReqURL,
			type: 'GET',
			dataType: 'json',
			error: function(err){
				console.log(err);
			},
			success: function(data){
				console.log("Got the data");
				console.log(theNYTObj.headline.main);
				console.log(theNYTObj.section_name);
				console.log(data);

				var theImage = 'news.jpg';
				var randomImgNum = Math.floor(Math.random() * 100);
				console.log(randomImgNum);
				if (data.photos.photo[randomImgNum]){
					if (data.photos.photo[randomImgNum].url_o){
						theImage = data.photos.photo[randomImgNum].url_o;
					}
				}
				console.log(theImage);

				app.makeHTML(theNYTObj, theImage);

			}
		});
	}, 

	makeHTML: function(theObj,theImageURL) {
		var htmlString = '<div class="flickr-article-box">';
		htmlString +=	'<h1>' + theObj.headline.main + '</h1>';
		htmlString +=	'<img src="' + theImageURL + '">';
		htmlString += '</div>';

		$('#news-container').append(htmlString);
	}, 
}