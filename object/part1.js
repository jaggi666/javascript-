// singleton

// object literal

const mysum = Symbol("id");
const person = {
  name: "John",
  age: 30,
  [mysum]: "12345",
  location: "New York",
  email: "john@example.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"]
}
// Accessing object properties
console.log(person.name);
// A person's age
console.log(person.age);

// A person's unique ID
console.log(person[mysum]);

// A person's location
console.log(person.location);

// A person's email
console.log(person.email);

// A person's login status
console.log(person.isLoggedIn);

// A person's last login days
console.log(person.lastLoginDay);

person.age = 35;
// = nal value nu overwrite kar sakde ha
console.log(person.age);

//  Object.freeze(person);

person.age = 40; // freeze karan to baad overwrite ni kar sakde
console.log(person);
// Output: 35

person.greeting = function() {
  console.log(`Hello, my name is ${this.name}`);
};

console.log(person.greeting());
// Output: Hello, my name is John

