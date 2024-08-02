//Nested function scope also called lexical scoping:
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// Closure :
// It's a combination of a function bundled together with references to it's surrounding state.
// closures are created every time a function is created, at function creation time.

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer(); // prints 1
// outer(); // prints 1
// that's beacause with every new invocation of the function a temporary memory is established and
// we have a new counter variable initialized to 0 and then incremented.

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn(); // prints 1
// fn(); // prints 2
// A better definition of closure: In Javascript, when we return a function from another function,
// we are effectively returning a combination of the function definition along with the function's
// scope. this would let the function definition have an associated persistent memory which could
// hold on to live data betweeen executions. that combination of the function and it's scope chain
// is what is called a closure in Javascript.

//Function Currying:
// Currying is a process in functional programming in which we transform a function with multiple
// arguments into a sequence of nesting functions that take one argument at a time.

// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(2, 3, 5));

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

// this Keyword:
// when used in a function it refers to the function it belongs to
// it makes functions reuseable by letting you decide the object value
// this value is determind by how a function is called

// function sayMyName(name) {
//   console.log(`My name is ${name}`);
// }
// sayMyName('Walter White');

// you can determine what is logged to the console,by how a function is called
// how to determine 'this':
// there are 4 ways to invoke a function is js and determine the value of 'this' keyword
// implicit binding - explicit binding - new binding - default binding

//implicit binding
// const person = {
//   name: 'Vishwas',
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };
// person.sayMyName();

// explicit binding:
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }
// here we have to explicitly specify the context that the function is called
// t odo that we can use the 'call' method which allows you to specify the context
// in which the function is invoked
// sayMyName.call(person);

// new binding:
// is js you can invoke a function with the "new" keyword
// and in this case the function is invoked with 'this' keyword refrencing an empthy object
// function Person(name) {
// this = {}
// this.name = name;
// }
// when a function is invoked with this keyword within the function this keyword will always refrence a new empthy object.
// const p1 = new Person('Vishwas');
// const p2 = new Person('Batman');
// console.log(p1.name, p2.name);

// default binding:
// the fallback binding if none if the above rules are matched:
// globalThis.name = 'superman';
// sayMyName(); //My name is undefined
// if none of the three rules are satisfied, js will default to the global scope and
// set this keyword to the global object and since the name variable does not exist it shows undefined
// if you set the globalThis name variable it will show up in the console log.
// Order of Precedence:
// 1.New binding 2.explicit binding 3.implicit binding 4.default binding

// prototype:
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
const person1 = new Person('Bruce', 'Wayne');
const person2 = new Person('Clark', 'Kent');
// js is a dynamic language so it allows us to attach new properties at an object at any given time
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
// the function getfyllname is specific to the person1
// console.log(person1.getFullName());
// console.log(person2.getFullName()); //throws an error
// in js every function has a property called prototype that points to an object
// we can we can make use of that prototype object to determine all our shareable properties.
// console.log(person1.getFullName());
// console.log(person2.getFullName());

// prototypal inheritance
