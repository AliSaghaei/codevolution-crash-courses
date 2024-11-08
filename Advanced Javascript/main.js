// ***************************************
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

// ***************************************
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

// ***************************************
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

// ***************************************
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
// in js you can invoke a function with the "new" keyword
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

// ***************************************
// prototype:
// function Person(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
// }
// const person1 = new Person('Bruce', 'Wayne');
// const person2 = new Person('Clark', 'Kent');
// js is a dynamic language so it allows us to attach new properties at an object at any given time

// person1.getFullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };

// the function getfyllname is specific to the person1
// console.log(person1.getFullName());
// console.log(person2.getFullName()); //throws an error

// Person.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };
// in js every function has a property called prototype that points to an object
// we can we can make use of that prototype object to determine all our shareable properties.
// console.log(person1.getFullName());
// console.log(person2.getFullName());

// ***************************************
// prototypal inheritance
// function SuperHero(fName, lName) {
// this = {}
//   Person.call(this, fName, lName);
//   this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrime = function () {
//   console.log('Fighting Crime');
// };

// SuperHero.prototype = Object.create(Person.prototype);

// const batman = new SuperHero('Bruce', 'Wayne');
// SuperHero.prototype.constructor = SuperHero;
// console.log(batman.getFullName());

// *************************************************
// Class
class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const classP1 = new Person('Bruce', 'Wayne');
console.log(classP1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log('Fighting Crime');
  }
}

const classP2 = new SuperHero('Clark', 'Kent');
console.log(classP2.sayMyName());

// **************************************************
// Iterables and Iterators:
// An object which implements the iterable protocol is called iterable.

// For an object to be iterable it must implement a method at the key [Symbol.iterator]
// that method should not accept any argument and should return an object which conforms
// to the iterator protocol

// The iterator protocol decides whether an object is iterator
// the object must have a next() method that returns an object with two properties
// value: which gives the current element
// done: which is a boolean value indicating whether or not there are any more elements that
// could be iterated upon.
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: 'Hello', done: false };
        } else if (step === 2) {
          return { value: 'World', done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

// for (const word of obj) {
//   console.log(word);
// }

// *********************************************
// Generators:
// They are special functions that simplify the task of writing iterators

// function normalFunction(){} // normal function does not stop until the lat line is executed
// the only way t oexit is either returning from it or throwing an error

// Generator functions can stop mid way and then continue from where it has stopped
function* genetatorFunction() {
  yield 'Hello';
  yield 'World';
}
const generatorObject = genetatorFunction();

for (const word of generatorObject) {
  console.log(word);
}
