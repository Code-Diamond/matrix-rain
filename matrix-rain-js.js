var w = window.innerWidth;
var h = window.innerHeight;

function createSpan(id)
{
	var span = document.createElement("span");
	span.setAttribute("id", id);
	document.body.appendChild(span);	
}
function setSpan(x,y, id)
{
	var text = generateRandomCharacter();
	document.getElementById(id).innerHTML = text;
	document.getElementById(id).style.left = x*12+"px"
	document.getElementById(id).style.top = y*12+"px"
	document.getElementById(id).style.color = "lightgreen";
	setTimeout(function() {document.getElementById(id).style.color = "teal"},10);
	setTimeout(function() {document.getElementById(id).style.color = "green"},50);
	setTimeout(function() {document.getElementById(id).style.color = "#001c00"},10000);
}

function generateRandomCharacter()
{
	var random = Math.floor(Math.random() * 760);
	var character = String.fromCharCode(random);
	var escape = character.toString(16);		
	return escape;
}

function del(id){
	document.getElementById(id).innerHTML = "" 	
}

function createTimeoutFunction(i, j) {
	var coinFlip = Math.floor(Math.random() * 10)+1;
	var coinFlip2 = Math.floor(Math.random() * 100)+1;
	var k = i + "|" + j;
	setTimeout(function() {setSpan(i,j,k);}, j*100);
	setTimeout(function() {del(k);}, j*100*coinFlip+coinFlip2);
}
function createTimeoutFunction2(i, j) {
	var coinFlip = Math.floor(Math.random() * 10)+1;
	var coinFlip2 = Math.floor(Math.random() * 100)+1;
	var k = i + "|" + j;
	setTimeout(function() {setSpan(i,j,k);}, j*10);
	setTimeout(function() {del(k);}, j*10*coinFlip);
}


function makeSpans(){
	for(var i=0; i <w/12; i++){
		for(var j=0; j<h/12;j++){
			createSpan(i+"|"+j);			
			var k = i + "|" + j;
		}
	}
}
function makeRainDrop(i){
	for(var j=0; j<h/12;j++){
		createTimeoutFunction(i,j);
	}

}
function makeRainDrop2(i){
	for(var j=0; j<h/12;j++){
		createTimeoutFunction2(i,j);
	}

}
function run(){
	makeRainDrop2(2);
	setInterval( function() {
		var i = Math.floor(Math.random() * w/12);
		var j = Math.floor(Math.random() * 10000);
		setTimeout(function() {makeRainDrop(i);},j);
	},50);
	setInterval( function() {
		var i = Math.floor(Math.random() * w/12);
		var j = Math.floor(Math.random() * 10000);
		setTimeout(function() {makeRainDrop2(i);},j);
	},80);
}