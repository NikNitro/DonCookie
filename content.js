
var hostname = window.location.hostname;

// Need 2 seconds for waiting to the blocker js to load
setTimeout(function() {
  if (hostname == 'elpais.com') {
    theCountry();
  } else if (hostname == 'www.elconfidencial.com') {
    theConfidence();
  } else if (hostname == 'www.marca.com') {
    theConfidence();
  } else if (hostname == 'www.diariosur.es') {
    southDiary();
  } else if (hostname == 'www.elmundo.es') {
    theConfidence();
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
