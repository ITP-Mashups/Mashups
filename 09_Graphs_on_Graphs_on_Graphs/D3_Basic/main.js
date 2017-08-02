//Function to draw SVGs using D3
function drawD3Astros(data){
	console.log("D3!");

	var centerX = 100;


	d3.select('#mySVG')
	.selectAll('circle')
    .data(data)
    .enter()
    .append("circle")
    .attr({
		"class": "mainCircle",
		"cy" : 200,
		"r" : 40
	})
	.attr('cx', function(d, i) {
		return (580 / data.length) * i + 50;
	});


	// for (var i = 0; i <totalNum; i++){
	// 	d3SVG.append('circle')
	// 	.attr({
	// 		"class": "mainCircle",
	// 		"cx" : centerX,
	// 		"cy" : 200,
	// 		"r" : 40
	// 	});

		
	// 	d3SVG.append('circle')
	// 	.attr({
	// 		"class": 'eyeCircles',
	// 		"cx" : centerX,
	// 		"cy" : 200,
	// 		"r" : 20
	// 	})
	// 	.transition()
	// 	.attr("cy",500)
	// 	.duration(3000)
	// 	.delay(500);
		

	// 	centerX += 100;
	// }
}

//Function to make AJAX call
function getSpaceData() {
	var myURL = "http://api.open-notify.org/astros.json";
	$.ajax({
		url: myURL,
		type: 'GET',
		dataType: 'jsonp',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			console.log(data);
			$('#totalPeople').html(data.number);
			drawD3Astros(data.people);
		}
	});
}

$('document').ready(function(){
	getSpaceData();
});