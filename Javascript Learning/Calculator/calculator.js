
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var sum = document.getElementById("sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	sum.innerHTML = ("The sum is: %f", (one+two));
}