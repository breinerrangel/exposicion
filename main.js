// const person = {
// 	name: 'John',
// 	age: 30,
// 	email: 'john@example.com'
// };

// console.log(person.name); // Output: 'John'
// console.log(person.age); // Output: 30
// console.log(person.email); // Output: 'john@example.com'



// const person = {
// 	name: 'John',
// 	age: 38,
// };

// person.email = 'john@example.com';
// delete person.age;
// console.log(person); // Output: { name: 'John', email: john@example.com' }



// const person = {
// 	name: 'John',
// 	age: 38,
// 	saludo() {
// 		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// 	}
// };

// person.saludo(); // Output: 'Hello, my name is John and I am 30 years old.'




const phoneBook = {
	'John Doe': '555-1234',
	'Jane Smith': '555-5678',
	'Bob Johnson': '555-9612'
};

console.log(phoneBook['Jane Smith']); // Output: '555-5678"



function newPerson(name, age) {
	return {
		name,
		age,
		saludo() {
			console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
		}
	};
};
const person1 = new Person('John', 38);
const person2 = new Person('Jane', 25);
person1.saludo(); // Output: 'Hello, my name is John and I am 30 years old."
person2.saludo(); // Output: 'Hello, my name is Jane and I am 25 years old."