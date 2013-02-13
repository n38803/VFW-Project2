// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	//Save data into local storage
/*	function storeData(key){
	//find value of radio
		getSelectedRadio();
	//save form elements into storage
		localStorage.setItem("Date", $('date').value);
		localStorage.setItem("Type", $('type').value);	
		localStorage.setItem("Group", $('group').value);
		localStorage.setItem("Name", $('name').value);
		localStorage.setItem("Calories", $('calories').value);
		localStorage.setItem("Notes", $('notes').value);
		
		alert("Meal Saved!");
	}; */
	
	function storeData(){
		var id				= Math.floor(Math.random()*1000000001);
		//Gather up all our form field values and store them in an object
		//Object properties contain array with form label and input values
		var item			= {};
			item.date		= ["Date: ", $('date').value];
			item.type		= ["Meal Type: ", $('type').value];
			item.group		= ["Food Group: ", groupValue];
			item.name		= ["Food Name: ", $('name').value];
			item.calories	= ["Calories: ", $('calories').value];
			item.notes		= ["Additional Notes: ", $('notes').value];
		//Save data to local storage
			localStorage.setItem(id, JSON.stringify(item));
			alert("Contacted Saved!");
			
	};
	
	
	//clear all data
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear!");
		}else{
			localStorage.clear();
			alert("All meals have been erased.");
			window.location.reload();
			return false;
		};
	};
	
	
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
			makeSelect.setAttribute("id", "type");
			
		for(var i=0, j=mealType.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = mealType[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		};
		selectLi.appendChild(makeSelect);
	};


	// Variable Defaults
	var mealType = ["---Choose A Meal Type---", "Breakfast", "Lunch", "Dinner", "Other"];
	makeCats();

/*

	// Set link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	
*/
	var save = $('submit');
	save.addEventListener("click", storeData);


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