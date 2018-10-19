
function createDiv(id)
{
	var div = document.createElement("div");
	div.setAttribute("id", "div"+id );
	document.body.appendChild(div);
}

function createSpan(divId, id)
{
	var span = document.createElement("span");
	span.setAttribute("id", "div"+divId+"span"+id);

	// span.appendChild(node);
	document.getElementById("div"+divId).appendChild(span);	
}
function setSpan(divId, id)
{
	var spanID="div"+divId+"span"+id;
	var text = generateRandomCharacter();
	document.getElementById(spanID).innerHTML = text;
}

function generateRandomCharacter()
{
	var coinFlip = Math.floor(Math.random() * 20);
	if(coinFlip<5)
	{
		var random = Math.floor(Math.random() * 760);
		var character = String.fromCharCode(random);
		var escape = character.toString(16);		
	}
	else
	{
		escape = "&nbsp;"
	}

	return escape;
}

function del(divId,id){
	document.getElementById("div"+divId+"span"+id).innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 	
}
function dest(divId,id){
	document.getElementById("div"+divId+"span"+id).innerHTML = "" 	
}

function createTimeoutFunction(i, j) {
	// var coinFlip = Math.floor(Math.random() * 4)+1;
	var coinFlip2 = Math.floor(Math.random() *10)+1;
	setTimeout(function() {setSpan(i,j);}, j*1*coinFlip2);
	setTimeout(function() {del(i,j);}, j*3*coinFlip2);
}

// function createDelTimer(i, j) {

// }

function makeDivsAndSpans(){
	for(var i=0; i <40; i++)
	{
		createDiv(i);
		for(var j=0; j<40;j++)
		{
			createSpan(i, j);			
		}
	}
}

function run()
{
	for(var i=0; i <40; i++)
	{
		for(var j=0; j<40;j++)
		{
			dest(i,j)
	
		}
	}
	for(var i=0; i <40; i++)
	{
		for(var j=0; j<40;j++)
		{
			createTimeoutFunction(i,j);
			// createDelTimer(i,j);
		}
	}
	setTimeout(run,1600);
}
