var app = {

  myKey: 'AIzaSyD3oNQ5xy7Qv2ss6HngtJgOXIYLBS3UYJ4',

  initialize: function() {
    $('#submit').click(function() {
      var term = $('#search').val();
      app.makeYoutubeRequest(term);
    })
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
        var num = Math.floor(Math.random() * data.items.length);
        //Get the video id
        var theVideoId = data.items[num].id.videoId;
        console.log(theVideoId);
        app.makePlayer(theVideoId);
      },
    });
  },

  makePlayer: function(videoId) {
    app.player = new Plyr('#player');
    app.player.source = {
      type: 'video',
      sources: [
        {
          src: videoId,
          provider: 'youtube',
        },
      ],
    };
    app.player.on('ready', function() {
      app.player.play();
    });

    app.player.on('timeupdate', function(time) {
      debugger;
      if (event.detail.plyr.duration/2 < event.detail.plyr.currentTime) {
        $('#timeUpdate').html('Video is half way done!')
      }
    });
  },
};