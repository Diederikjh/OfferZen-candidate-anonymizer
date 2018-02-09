
/*

	TODO:
		Initial load sometiems still shows profile picture.
		Show enabled/disabled on UI
		Would be nice to have same random cat picture for list view as details view
		replace UGLY icon
		Make dog API an option


*/

var fixPrifileImagesListView = function (nodes) {
	Array.prototype.forEach.call(nodes, function(element) {
	  	element.setAttribute("src", "http://thecatapi.com/api/images/get?format=src");
	  });
}

var fixEducationListView = function (nodes){
  var replacementUniversityText = "University of Somewhere"
  Array.prototype.forEach.call(nodes, function(element) {
  	console.log(element.childNodes.length)
	for (var i = 0; i < element.childNodes.length; i++) {
		if (element.childNodes[i].nodeName === "#text") {
			if (element.childNodes[i].nodeValue) {
				element.childNodes[i].nodeValue = element.childNodes[i].nodeValue.replace(/.*University.*/, replacementUniversityText)
				element.childNodes[i].nodeValue = element.childNodes[i].nodeValue.replace(/Unisa/, replacementUniversityText)
			}
		}
	}
  });
}

var fixNameListView = function (nodes) {
	Array.prototype.forEach.call(nodes, function(element) {
  	for (var i = 0; i < element.childNodes.length; i++) {
	    var curNode = element.childNodes[i];
		    if (curNode.nodeName === "#text") {
		        curNode.nodeValue = "A human just like you";
		        console.log("Replacing inner text")
		        break;
		    }
		}

  });
}

  var profileImages = document.getElementsByClassName("profile-image")
  fixPrifileImagesListView(profileImages);

  // Hide university names
  var education = document.getElementsByClassName("education")
  fixEducationListView(education)
  
  // Name on list view
  var cardHeaders = document.getElementsByClassName("card-header")
  fixNameListView(cardHeaders)

  // Main page profile image
  var avatarDivs = document.getElementsByClassName("avatar")
  Array.prototype.forEach.call(avatarDivs, function(element) {
  	element.setAttribute("style", "background-image:url('http://thecatapi.com/api/images/get?format=src')");
  });

  // Name on details view
  var cardHeaders = document.getElementsByClassName("card-content")
  Array.prototype.forEach.call(cardHeaders, function(element) {
  	console.log(element.childNodes.length)
	for (var i = 0; i < element.childNodes.length; i++) {
		if (element.childNodes[i].nodeName === "H3") {
			element.childNodes[i].innerText = "A human just like you"
			break;
		}
	}
  });

  // Replace name in title
  document.title.replace(/.* - /, "")


// Watch for changes here to candidate list node:
var config = { childList: true };
var candidateList = document.getElementsByClassName("candidate-list")

var callback = function(mutationsList) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
			for(var addedNodes of mutation.addedNodes) {

				// Do listview stuff
            	var profileImages = addedNodes.getElementsByClassName("profile-image")
            	fixPrifileImagesListView(profileImages)

   			    var education = addedNodes.getElementsByClassName("education")
  			    fixEducationListView(education)
  			    
    			var cardHeaders = addedNodes.getElementsByClassName("card-header")
  			    fixNameListView(cardHeaders)

			}

        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(candidateList[0], config);
