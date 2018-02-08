  // chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
  //   console.log("Hallo?");
  // });

  console.log("Hi!")

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


  var cardHeaders = document.getElementsByClassName("card-header")

  Array.prototype.forEach.call(cardHeaders, function(element) {
  	// Name 

  	element.innerText = "A human just like you";

  	// https://stackoverflow.com/a/6520270/8524
 //  	for (var i = 0; i < element.childNodes.length; i++) {
 //    var curNode = element.childNodes[i];
	//     if (curNode.nodeName === "#text") {
	//         curNode.innerText = "A human just like you";
	//         console.log("Replacing inner text")
	//     }
	// }

  });