(function (window) {

	var names = ["John", "Harry", "Ariana", "Jane", "Louis", "Hazel", "Joey", "Niall", "Taylor", "Jen"];

	for (var i in names) {

	  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

	  if (firstLetter == 'j') {
	     window.byeSpeaker.speak(names[i]);
	  } else {
	     window.helloSpeaker.speak(names[i]);
	  }
	}
})(window);