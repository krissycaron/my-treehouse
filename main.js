
var badgeContainer = document.getElementById("badgeContainer");

function makeDom(xhrData) {
	var badgesString = "";
	var currentBadge;
	for(var i=0; i<xhrData.badges.length; i++){
		currentBadge = xhrData.badges[i];
	
	  badgesString += `<div class="col-sm-6 col-md-4">`; //copied and pasted from bootstrap 
	  badgesString += `<div class="thumbnail">`; // must use your "`" tick marks
	  badgesString += `<img src="${xhrData.badges[i].icon_url}" alt="badge">`;
	  badgesString += `<h3>${xhrData.badges[i].name}</h3>`;
	  badgesString += `</div></div></div>`
	}
	badgeContainer.innerHTML = badgesString;
	// xhrData.badges[i].name.sort[];
}

/////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////

function executeThisCodeAfterFileLoaded(){
	var data =JSON.parse(this.responseText);
	console.log(data);
	makeDom(data);
}

function executeThisCodeAfterFileFails(){
	console.log("Nope.");
}


var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); 
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/krissycaron.json");

myRequest.send();


