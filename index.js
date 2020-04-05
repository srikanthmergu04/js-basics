// log message in javaScript
console.log("Welcome to JavaScript Learning");

//variable
let name = 'Srikanth Mergu';
console.log(name);

//constant
const PI = 3.14;
console.log(PI);

/**
 *Primitives or Value Type
 1.String
 2.Number
 3.Boolean
 4.undefined
 5.null 
 */

let firstName = 'Srikanth'; // String Literal
let age = 23; // Number Literal
let isApproved = true; // Boolean Literal
let color; // Undefined
let selectedColor = null; //

// Dynamic Typing - Type of Variable decides are Run time
console.log(typeof selectedColor);
selectedColor = true;
console.log(typeof selectedColor);

/** Reference Types
 * 1.Object
 * 2.Array
 * 3.Function
 */

// 1.Object
// Object Literal should be enclosed in {}.

let person = {
    name: 'John',
    age: 23
}
console.log(person);

// Reading & Accessing using Dot Notation
person.name = 'Jacob';

console.log(person.name);

// reading and accessing using Bracket Notation
//used to access Dynamically

let selection = 'name';
person[selection] = 'Victor';

console.log(person[selection]);

// 2.Arrays
// Arrays should be enclosed in [].

let colors = ['orange','white','green'];
console.log(colors);

colors[3] = 'blue';
console.log(colors);

console.log('length of Colors List: ' +colors.length);

// 3.Functions

function greet(name){
    console.log('Hello ' + name);
}

//calling greet function
greet('John');


