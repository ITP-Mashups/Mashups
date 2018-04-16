//Define a global object to store the space data
var spaceNum;

//Define a function to execute the AJAX call
function getSpaceData() {
	//Define the url for the API call
	var url = "http://api.open-notify.org/astros.json";
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
			spaceNum = 0;
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$("#totalPeople").html(data.number);
			spaceNum = data.number;
		}
	});
}

/*---------------------------------------------
p5 Code
----------------------------------------------*/


var rSlider, gSlider, bSlider;

function setup() {
	console.log("Setup");
	createCanvas(960, 540);

	//Call the function to make the AJAX call
	getSpaceData();

	rSlider = createSlider(0, 255, 100);
	rSlider.addClass('rslider-position');
	 // rSlider.position(20, 20);
	  gSlider = createSlider(0, 255, 0);
	//  gSlider.position(20, 50);
	  bSlider = createSlider(0, 255, 255);
	//  bSlider.position(20, 80);
}

function draw() {
	var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);

	//Check if there is data
	if (spaceNum){
		var centerX = 100;
		for (var i = 0; i < spaceNum; i++){
			ellipse(centerX, 100, 40, 40);
			centerX += 50;
		}
	}
	else{
		console.log("No data yet");
	}
}
