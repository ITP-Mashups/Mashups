/*
fFFGeIaOHgqGY0nOX4MNxqkkoXzbWx2p
api.giphy.com
http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=fFFGeIaOHgqGY0nOX4MNxqkkoXzbWx2p
*/

var api = 'http://api.giphy.com/v1/gifs/search';
var apiKey = '&api_key=fFFGeIaOHgqGY0nOX4MNxqkkoXzbWx2p';
var query = '?q=ryan+gosling';

function setup() { 
  //createCanvas(400, 400);
  noCanvas();
  var url = api + query + apiKey;
  loadJSON(url, gotData)
} 

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.preview_gif.url);
  }
}

