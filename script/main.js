(function () {
	
	console.log("fired!");
	
	//set up all variables for images, headlines, subtext, main content, and an empty variable called appliedClass
	
	var theImages = document.querySelectorAll('.image-holder'),
	theHeading = document.querySelector('.heading'),
	theSubhead = document.querySelector('.main-copy h2'),
	theSeasonText = document.querySelector('.main-copy p'),
	appliedClass;
	
	theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
	theHeading.classList.add('spring');
	
	function changeElements() {
		//grab the id of the thing we're clicking on and use as a refrence to go into content object and replace text on a page. have ids, elements,
		//retrieve corect content, replace content on the page. Could do so through innerHTML, firstChild.nodeValue, or through
		theSubhead.classList.remove(appliedClass);
		theHeading.classList.remove(appliedClass);
		theSubhead.classList.add(this.id);
		theHeading.classList.add(this.id);
		appliedClass = this.id;
		theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline;
		theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
	}
	
	
	[].forEach.call(theImages, function(image) {
		image.addEventListener('click', changeElements, false);
	});
	//Like an array, so we can call for each, instead of a for loop (nobody does that anymore?).
	
})();