var WUC = {};

function getCongressData(){
	console.log("Yup!");

	//Get todays date
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
	var queryDay = yyyy + '/' + mm + '/' + dd;
	console.log(queryDay);
	var myKey =	'F0XqUcS8HkuRGJZXzXyWLJDIY26KlEB0IAMqZ4hn';
	// Using today's day
	var myURL = 'https://api.propublica.org/congress/v1/house/floor_updates/' + queryDay + '.json';
	// Using a different date to get more data
	myURL = 'https://api.propublica.org/congress/v1/senate/floor_updates/2017/05/02.json';
	//Make AJAX request

	$.ajaxSetup({
		beforeSend: 
		function(xhr) {	
			xhr.setRequestHeader("X-API-Key", myKey)
		},
	});

	$.ajax({
		url: myURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			//console.log(data);
			WUC.today = data.results;
			console.log(WUC.today);
		}
	});
}

$(document).ready(function(){
	//Make request to Sunlight Congress API
	getCongressData();
});
