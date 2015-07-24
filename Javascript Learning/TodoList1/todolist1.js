
var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i=0; i<items.length; i++) {
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem); // When losing focus.
	inputs[i].addEventListener("keydown", itemKeypress); // !!! You can only prevent default action of Tab key when keydown.
}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus(); // ??? focus on the input.
	input.setSelectionRange(0, input.value.length); // ??? auto select the whole text (when focus).

}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(event) {
	if( event.which === 13 ) { // Enter key: 13

		updateItem.call(this); // Run updateItem() with set this to this (whatever is in call());
		// Changing Context
	}

	if( event.which === 9 ) { // Tab key: 9

		event.preventDefault();
		var nextInput;

		updateItem.call(this);

		if (this.parentNode.nextElementSibling !== null) {
			nextInput = this.parentNode.nextElementSibling;
			console.log(nextInput);
		}
		else {
			nextInput = this.parentNode.parentNode.childNodes[1]; //!!! Mind the index of childNodes.
			console.log(this.parentNode.parentNode.childNodes);
			console.log(nextInput);
		}
		editItem.call(nextInput);
			
	}

	console.log(event.which);
}




