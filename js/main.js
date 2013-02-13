// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){


	// getElementByID Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	//Create select field element and populate with options.
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
			
		for(var i=0, j=contactGroups.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		};
		selectLi.appendChild(makeSelect);
	};

	// Variable Defaults
	var contactGroups = ["---Choose A Food Group---", "Meat", "Vegetable", "Fruit", "Grain", "Dairy"];
	makeCats();

/*

	// Set link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);

*/
});







/*

// Declare Variables
var fname = document.getElementById("fname");

// Capture & Retrieve Data
var captureData = function(){
	localStorage.setItem("First Name", fname.value);
};

var getData = function(){
	var fnameKey = localStorage.key("First Name");
	var fnameValue = localStorage.getItem(fnameKey);
	fname.value = fnameValue;
};


// Event Listeners




var checkboxes = document.etElementByID("myForm").meal;
console.log(checkboxes);

var getValue = function(){
	for(i=0, j=checkboxes.length; i<j; i++){
		if(checkboxes[i].checked){
			console.log(checkboxes[i].value);	
		};
	};
};


// JS

Common JS Events

click
submit
focus
blur
change
mouseover
mouseout



var myField = document.getElementByID("myText");
console.log(myField);

var changeBorder = function(){
	textField.setAttribute("class", hasFocus);
};

var defaultBorder = function(){
	textField.removeAttribute("class", hasFocus);
};

var myList = document.createElement("ul");
console.log(myList);

search.addEventListener("click", changeBorder);
textField.addEventListener("focus", changeBorder);
textField.addEventListener("blur", defaultBorder);


var tags = document.getElementsByTagName("li");
console.log(tags);
*/