// Do a couple console.logs
function consoleLogExample () {
	console.log("Hello from myscript.js");
	console.log("Hi again"); //This is not needed
	console.log("Hey, hey, hey!"); //Now you are being excessive
}

//Alert example
function alertExample () {
	var name = prompt("What is your name?");
	alert("Hello " + name + ", nice to meet you!");

	name = "Stranger";
	console.log("The user's name is " + name);
	console.log("I'm not good with names.");
}


// if/else
function ifElseExample() {
	var answer = prompt("What's your favorite city?");

	if (answer) {
	  alert("I love " + answer + " too!");
	} else {
	  alert("Oh being mysterious are we?");
	}
}


// while loop
function whileExample() {
	var counter = 1;
	alert("I am slowly going crazy...")

	while (counter < 7) {
	  alert(counter);
	  counter++;
	}
	alert("Switch!");
	alert("...crazy going slowly am I")
	counter = 6;
	while (counter) {
	  alert(counter);
	  counter--;
	}
}

function forExample() {
	for (var counter=3;counter; counter = counter-1) {
	  alert("Knock, knock. Who's there? Banana. Banana who?");
	}
	alert("Knock, knock, Who's there? Orange. Orange who?");
	alert ("Orange you glad I didn't say banana?");

}


//Array
function arrayExample() {
	var friends = ["Big Bird", "Cookie Monster", "Grover", "Oscar the Grouch", "The Count"];
	alert("My friends are: " + friends);
	alert("I have " + friends.length + " friends!");

	// Note: i+=1 same as i=i+1
	var colors = ["yellow", "blue with cookies", "blue", "green", "purple"];
	for(var i=0; i < friends.length; i+=1) {
	  alert(friends[i] + " is " + colors[i]);
	}
}

//Object
function objectExample() {

	var car = {
	  make: "Tesla",
	  model: "Model S",
	  "battery kW": 60
	}
	alert("This is my car! Make: " + car.make + " Model: " + car.model + " Battery (kW): " + car["battery kW"]);

	alert("Lets give my car an upgrade by naming her 'Ravenna' and upgrading her battery.");
	car.name = "Ravenna";
	car["battery kW"] = 85;

	alert("My car was just upgraded! Name: " + car.name + " Make: " + car.make + " Model: " + car.model + " Battery (kW): " + car["battery kW"]);


}



