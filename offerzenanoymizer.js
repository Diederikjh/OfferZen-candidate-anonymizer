  // Profile images

  var profileImages = document.getElementsByClassName("profile-image")
  Array.prototype.forEach.call(profileImages, function(element) {

  	// Image
  	element.setAttribute("src", "http://thecatapi.com/api/images/get?format=src");
  	//element.removeAttribute("src");

  });

  // Main page profile image
  var avatarDivs = document.getElementsByClassName("avatar")
  Array.prototype.forEach.call(avatarDivs, function(element) {

  	// Image
  	element.setAttribute("style", "background-image:url('http://thecatapi.com/api/images/get?format=src')");

  });

  // Name on list view

  var cardHeaders = document.getElementsByClassName("card-header")
  Array.prototype.forEach.call(cardHeaders, function(element) {
  	// TODO only replace name, not entire diff
  	// Name 
  	//element.innerText = "A human just like you"

  	// https://stackoverflow.com/a/6520270/8524
  	for (var i = 0; i < element.childNodes.length; i++) {
	    var curNode = element.childNodes[i];
		    if (curNode.nodeName === "#text") {
		        curNode.nodeValue = "A human just like you";
		        console.log("Replacing inner text")
		        break;
		    }
		}

  });


  // Name on details view
  var cardHeaders = document.getElementsByClassName("card-content")
  Array.prototype.forEach.call(cardHeaders, function(element) {
  	// Name 
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


var replacementUniversityText = "University of Somewhere"
// Hide university names
var education = document.getElementsByClassName("education")
  Array.prototype.forEach.call(education, function(element) {
  	// Name 
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

//  TODO replace elements added dynamically on listview


