var app = {

	//A place to set up listeners or kick off an initial function
	initialize: function() {
		//Start the auth procuess by using my id and secret to get an access token
		app.getToken();
	},

	//This first ajax call uses my id and secret that I obtained from spotify to get
	//an access token that is good for one hour
	getToken: function(word) {
		var id = 'YOUR CLIENT ID';
		var secret = 'YOUR CLIENT SECRET';
		//this base encodes your id and secret to pass to the spotify server
		var encoded = btoa(id + ':' + secret);
		$.ajax(
		  {
		    method: "POST",
		    url: "https://accounts.spotify.com/api/token",
		    headers: {
		    	'Authorization': 'Basic ' +  encoded
		    },
		    data: {
		    	'grant_type': 'client_credentials'
		    },
		    success: function(result) {
		    	//after I get my access token, I use it to search for a spotify track
		    	app.searchTracks(result.access_token)
		    },
		  }
		);

		
	},

	//This is the search to spotify's track api, with the token in an authorization header
	searchTracks: function(token) {
		 $.ajax({
        url: "https://api.spotify.com/v1/tracks/7CZdd0S4WTktuiiARS8pY4",
        dataType: "json",
        headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token
				},
        success: function(data) {
            var trackName = data.name;
            var url = data.preview_url;


            var audioElement = document.createElement('audio');
            audioElement.src = data.preview_url;
            audioElement.autoplay = 'true';
            audioElement.controls = 'true';

            $('.title').html(trackName);
            $('.the-track').html(audioElement);
           
        },

        error: function() {
          console.log("Error retrieving spotify API");
        }
	    });

	}


};

