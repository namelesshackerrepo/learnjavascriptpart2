//global variables to keep track of fruits in the cart
//this is educational, not attempting to show best practices
//in general global variables should be avoided

var apple = 0;
var orange = 0;
var banana = 0;
var coconut = 0;
var strawberry = 0;

//grabs the html div with the id of buy, and adds 
//a click event listener to it
document.getElementById('buy').addEventListener('click', function() {
	//grabs the value of the input with id quantity
	var quantity = Number(document.getElementById('quantity').value);
	//grabs the value of the input with id fruittype
	var fruittype = document.getElementById('fruittype').value;
	//this is a conditional check to see if fruittype is 
	//equal to the string 'apple'.  If true, the code inside
	//the brackets will be run, if false, it will be skipped
	//over, and so on with the other fruit types.  
	if (fruittype === 'apple') {
			// increase how many apples there are in the cart 
			//write code here.  You need to increment the variable apple by whatever quantity is
	}
	if (fruittype === 'banana') {
			// increase how many bananas there are in the cart 
			//write code here.  You need to increment the variable bananas by whatever quantity is
		}
	if (fruittype === 'coconut') {
			// increase how many coconuts there are in the cart 
			//write code here.  You need to increment the variable coconuts by whatever quantity is
		}
	if (fruittype === 'strawberry') {
			// increase how many strawberries there are in the cart 
			//write code here.  You need to increment the variable strawberry by whatever quantity is
		}
	if (fruittype === 'orange') {
			// increase how many oranges there are in the cart 
			//write code here.  You need to increment the variable orange by whatever quantity is
		}
	// look below to see the function updateCart.  It updates the cart. 
	updateCart();
	//clears the input field
	reset();
})

  //this simply resets the input fields back to empty
function reset() {
	var number1 = document.getElementById('quantity').value = ' ';
}

function updateCart() {
	//grabs the div with the id cart
	var cart = document.getElementById('cart');
	cart.innerHTML = //write code here - you neeed to write a string that will display how many of each fruit are in the cart, and the amounts of fruit can be updated.  
	//your string should say something like = You have 6 oranges, and 7 bananas, etc.... 
}

//calls update cart in the beginning so that the initial empty cart
//is displayed
updateCart();
