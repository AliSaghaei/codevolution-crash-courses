// Log a statement using console.log()
// console.log('Hello From main.js');

// Variables
let age = 25;
// console.log(age);

const salary = 80000;
// console.log(salary);

// Data Types
//Primitive Data Types:
const name = 'vishwas'; //string
const PI = 3.14; //number
const isNewUser = true; // Boolean
let result; //  will return undefined : shows that the value is not assigned
const data = null; // represents empthy or unknown value
//Complex Data Types: Objects
const person = {
  firstname: 'Bruce',
  lastname: 'wayne',
  age: 30,
};
// console.log(person.firstname);
// Array types:
const odddNumbers = [1, 3, 5, 7, 9];
// console.log(odddNumbers[0]);

// Operators
// =                                           assignment operator
// + - * / % ++ --                             arithmatic operators
// < > <= >= == === != !==                     comparison operators
// && || !                                     logical operators
// "Bruce " + "Wayne"                          string operators
// const isEven = 10 % 2 === 0 ? true : false  ternary operator

// Type Conversion
// implicit -> automatic by js
// explicit -> done manually
// console.log(Number('5'));
// console.log(parseInt('5'));
// console.log(parseFloat('5.1'));
// console.log(String(500));
// console.log((600).toString());
// console.log(Boolean(10)); // null undefined 0 "" NaN  all convert to false
// console.log(Boolean(' ')); // has a space returns true

// Equality
// ==  allows coercion
// === does't allow coercion

// conditional statements
// if - else - else if - switch

const num = 0;
if (num > 0) {
  console.log('Number is positive');
} else if (num < 0) {
  console.log('Number is Negative');
} else {
  console.log('Number is Zero');
}

const color = 10;
switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  case 'green':
    console.log('color is green');
    break;
  default:
    console.log('not a valid color');
}

// Looping code
// for - while - do while - for of
// for (let i = 1; i <= 5; i++) {
//   console.log(`iteration number ` + i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log('iteration number ' + i);
//   i++;
// }

// let i = 6;
// do {
//   console.log('iteration number ' + i);
//   i++;
// } while (i <= 5);

// const numArray = [1, 2, 3, 4, 5];
// for (const num of numArray) {
//   console.log('iteration number ' + num);
// }

// Functions
function greet(username) {
  console.log('Good morning ' + username);
}
greet('Ali');
greet('vishwas');

function add(a, b) {
  return a + b;
}

const arrowSum = (a, b) => a + b;

const sum1 = add(5, 10);
const sum2 = arrowSum(25, 25);
console.log(sum1);
console.log(sum2);

// Scope : determines the accessibility or visibility of variables
// block scope - function scope - global scope

// block scope: introduced at 2015 with let and const.
// variavles declared inside the curley barces can not be accessed from outside the block

// function scope: variables declared inside the function can't be accessed from outside the function

// global scope: the scope outside any block or function.
// it's variables are accessible both inside a block and function scope
// it will not overwrite block or functional scope variables
