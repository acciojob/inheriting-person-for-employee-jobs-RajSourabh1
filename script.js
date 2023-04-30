// complete this js code
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.greet = function(){
// 		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
// };

// function Employee(name, age, jobTitle){
// 	Person.call(this,name,age);
// 	this.jobTitle = jobTitle;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.jobGreet = function(){
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
// };

// Person constructor function

function Person(name, age) {

this.name = name;

this.age = age;

}

// Person prototype method

Person.prototype.greet = function() {

console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);

}

// Employee constructor function

function Employee(name, age, jobTitle) {

Person.call(this, name, age);

this.jobTitle = jobTitle;

}

// Inherit Person prototype in Employee prototype

Employee.prototype = Object.create(Person.prototype);

// Set Employee constructor back to itself

Employee.prototype.constructor = Employee;

// Employee prototype method

Employee.prototype.jobGreet = function() {

console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);

}

// Example usage

const person = new Person('John', 30);

person.greet(); // logs: "Hello, my name is John, I am 30 years old."

const employee = new Employee('Jane', 25, 'Software Engineer');

employee.greet(); // logs: "Hello, my name is Jane, I am 25 years old."

employee.jobGreet(); // logs: "Hello, my name is Jane, I am 25 years old, and my job title is Software Engineer."
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
