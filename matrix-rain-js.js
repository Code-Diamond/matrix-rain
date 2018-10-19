
// function createDiv(id)
// {
// 	var div = document.createElement("div");
// 	div.setAttribute("id", "div"+id );
// 	document.body.appendChild(div);
// }

function createSpan(id)
{
	var span = document.createElement("span");
	span.setAttribute("id", id);

	// span.appendChild(node);
	document.body.appendChild(span);	
}
function setSpan(x,y, id)
{
	var text = generateRandomCharacter();
	document.getElementById(id).innerHTML = text;
	document.getElementById(id).style.left = x*20+"px"
	document.getElementById(id).style.top = y*5+"px"
}

function generateRandomCharacter()
{
	// var coinFlip = Math.floor(Math.random() * 20);
	// if(coinFlip<5)
	// {
		var random = Math.floor(Math.random() * 760);
		var character = String.fromCharCode(random);
		var escape = character.toString(16);		
	// }
	// else
	// {
		// escape = "&nbsp;"
	// }

	return escape;
}

function del(id){
	document.getElementById(id).innerHTML = "" 	
}
function dest(id){
	document.getElementById(id).innerHTML = "" 	
}

function createTimeoutFunction(i, j) {
	var coinFlip = Math.floor(Math.random() * 1500)+1;
	var k = i + "|" + j
	var coinFlip2 = Math.floor(Math.random() * 150)+1;
	setTimeout(function() {setSpan(i,j,k);}, j*10);
	setTimeout(function() {del(k);}, j*10+coinFlip);
}

// function createDelTimer(i, j) {

// }

function makeSpans(){
	for(var i=0; i <100; i++)
	{
		// createDiv(i);
		for(var j=0; j<240;j++)
		{
			createSpan(i+"|"+j);			
			var k = i + "|" + j;

		}
	}
}
function makeRainDrop(i)
{
	
	for(var j=0; j<240;j++)
	{

		createTimeoutFunction(i,j);
	}

}
function run()
{
	setInterval( function() {
		var i = Math.floor(Math.random() * 100);
		var j = Math.floor(Math.random() * 10000);
		setTimeout(function() {makeRainDrop(i);},j);
	},500);
	// setTimeout(run,1600);
}
