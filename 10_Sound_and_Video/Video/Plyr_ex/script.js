var app = {

  myKey: 'AIzaSyD3oNQ5xy7Qv2ss6HngtJgOXIYLBS3UYJ4',

  initialize: function() {
    $('#submit').click(function() {
      var term = $('#search').val();
      app.makeYoutubeRequest(term);
    });
  },

  makeYoutubeRequest: function(term) {
    var url = 'https://www.googleapis.com/youtube/v3/search?';
    var myParams = 'part=snippet&type=video&q=' + term + '&key=';
    var myURL = url + myParams + app.myKey;

    $.ajax({
      url: myURL,
      type: 'GET',
      dataType: 'jsonp',
      error: function(data){
        console.log("We got problems");
        console.log(data.status);
      },
      success: function(data){
        console.log(data);
        //Get a random integer to choose random video
        var num = Math.floor(Math.random() * (data.items.length - 1));
        //Get the video id
        var theVideoId = data.items[num].id.videoId;
        console.log(theVideoId);
        app.makePlayer(theVideoId);
      },
    });
  },

  makePlayer: function(videoID) {
    app.player = new Plyr('#player', {
      autoplay: true,
    });

    app.player.src = {
      type: 'video',
      sources: [{
        src: videoID,
        provider: 'youtube',
      }],
    };

    app.player.on('ready', function() {
      debugger;
      app.player.play();
    });
  },
  
};