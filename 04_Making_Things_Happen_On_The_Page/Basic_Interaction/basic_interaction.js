//******Homework Exercises******

//----Exercise 1----
//Define the function
function hashtagMtn(mtnTop){
	var hashtag = '#';
	for (var i = 0; i < mtnTop; i++){
		console.log(hashtag);
		hashtag += '#';
	}
}
//Call the function
//hashtagMtn(5);

//----Exercise 2----
//Define the function
function fizzBuzz(totalNums){
	for (var i = 0; i < totalNums; i++){
		if (i%3 === 0 && i%5 === 0) {
			console.log("FizzBuzz");
		}
		else if (i%3 === 0){
			console.log("Fizz");
		}
		else if (i%5 === 0){
			console.log("Buzz");
		}
		else{
			console.log(i);
		}
	}
}
//Call the function
//fizzBuzz(100);

//----Exercise 3----

//In the console
function make(rows,cols){
	var wholeBoard = "";
	for (var i = 0; i < rows; i++){
		var text = "";
		if (i % 2 === 0){
			for (var j = 0; j < cols; j++){
				text = text + '# ';
			}
		}
		else{
			for (var k = 0; k < cols; k++){
				text = text + ' #';
			}
		}
		wholeBoard += text + '\n';
	}
	console.log(wholeBoard);
}

//Call the function
//makeBoard(6,4);

//On the page
function makeBoard(rows, cols){
	var wholeBoard = "";
	for (var i = 0; i < rows; i++){
		var text = "";
		if (i%2 === 0){
			for (var j = 0; j < cols; j++){
				text += "#----";
			}
		}
		else {
			for (var k = 0; k < cols; k++){
				text += "--#--";
			}
		}
		wholeBoard += text + "<br>";
	}
	return wholeBoard;
}

var myChessBoard = makeBoard(3, 10);

//******Elements & Selectors******
//JS Approach
/*
var chessBoard = document.getElementById('chessBoard');
chessBoard.innerHTML = myChessBoard;

var myBoardContainer = document.createElement('div');
myBoardContainer.innerHTML = myChessBoard;
chessBoard.appendChild(myBoardContainer);
*/

//jQuery Approach
// $('#chessBoard').html(myChessBoard);
// $('#chessBoard').addClass('chessBoardStyle');


//******Functions******
var nums = 0;
function notify(){
	console.log("You clicked me : " + nums);
	nums++;
}

function generateRandomColor(){
	var r = Math.floor(Math.random() * 125);
	var g = Math.floor(Math.random() * 155);
	var b = Math.floor(Math.random() * 255);

	var randomColor = "rgb(" + r + "," + g + "," + b + ")";
	return randomColor;
}
