
var hostname = window.location.hostname;

// Need 2 seconds for waiting to the blocker js to load
setTimeout(function() {
	console.log("DonCookie in action!");
	switch(hostname){
	case "elpais.com":
		theCountry();
		break;
	case "www.elconfidencial.com":
	case "www.elmundo.es":
	case "www.marca.com":
	case "www.epe.es":
	case "www.elperiodico.com":
	case "www.lavanguardia.com":
    case "www.elindependiente.com":
		theConfidence();
		break;
	case "www.diariosur.es":
		southDiary();
		break;
	case "www.elespanol.com":
		theSpanish();
		break;
    case "www.meneame.net":
        moveMe();
        break;
	}

}, 2000);


var theCountry = function() {
	// Find and remove the element with the ID "pmConsentWall" if it exists.
	var wall = document.getElementById('pmConsentWall');
	if (wall) {
		wall.remove();
	} 
	// Change the style of the body's overflow to visible.
	document.body.style.overflow = 'visible';
}

var theConfidence = function() {
	// Find and remove the element with the ID 'didomi-popup' if it exists.
	var wall = document.getElementById('didomi-popup');
	if (wall) {
		wall.remove();
	} 
	document.body.className = 'v2';
}

var southDiary = function() {
	// Find and remove the element with the ID 'didomi-popup-open bodyBlocked' if it exists.
	var wall = document.getElementById('engagement-top');
	if (wall) {
		wall.remove();
	} 
	// Change the style of the body's overflow to visible.
	document.body.style.overflow = 'visible';
}

var theSpanish = function(){
	theConfidence();
	document.body.style.overflow = 'visible';
	var blur = document.getElementById("nhfp_didomi_block_page");
	if (blur) {
		blur.remove();
	}
}

var moveMe = function() {
    var wall = document.getElementById('qc-cmp2-main');
    if (wall) {
        wall.remove();
    }
}