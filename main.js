
function executeThisCodeAfterFileLoaded(){
	var data =JSON.parse(this.responseText);
	console.log(data);
}

function executeThisCodeAfterFileFails(){
	console.log("Nope.");
}


var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); 
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/krissycaron.json");


myRequest.send();
