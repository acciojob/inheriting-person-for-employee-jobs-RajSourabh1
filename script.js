// complete this js code
function Person(name, age) {
	function greet(){
		console.log("Hello, my name is "+name+", I am "+age+" years old.")
	}
}

function Employee(name, age, jobTitle) extends Person{
	super(name,age);
	console.log("Hello, my name is "+name+", I am "+age+" years old, and my job title is "+jobTitle+".")
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
