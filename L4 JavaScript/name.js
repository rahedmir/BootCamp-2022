var yourName = prompt("Enter Your Name");

var firstName = yourName.slice(0,1);
var lastName = yourName.slice(1,yourName.length);

var newName = firstName.toUpperCase() + lastName.toLowerCase();

window.alert("Hello, " + newName);