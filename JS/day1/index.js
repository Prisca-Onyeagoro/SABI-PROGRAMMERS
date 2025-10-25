let name = "John";
let age = 25;

// --- String Data Type ---
let firstName = "John";
let lastName = "Doe";

// Using double quotes inside single quotes
let message = 'He said "Hello"';

// Using apostrophe with double quotes
let greeting = "It's a beautiful day";

// Escaping quotation marks
let quote = "He said 'Hello'";
let anotherQuote = 'She said "Hi"';

// --- Number Data Type ---
let wholeNumber = 42;
let decimalNumber = 3.14159;
let exponential = 2.5e3; // 2500
let negative = -10;

// --- Boolean Data Type ---
let isTrue = true;
let isFalse = false;

// Falsy values in JavaScript:
let emptyDoubleQuote = "";
let emptySingleQuote = "";
let zero = 0;
let notANumber = NaN;
let falsyBoolean = false;
let nullValue = null;
let undefinedValue = undefined;

// --- Undefined and Null ---
let declaredButNotAssigned;
console.log(declaredButNotAssigned); // undefined

let emptyValue = null;

// --- Concatenation Operators ---
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// Template Literals (ES6)
let person = "Alice";
let personAge = 30;
let introduction = `My name is ${person} and I am ${personAge} years old`;
console.log(introduction);

let addition = 5 + 3; // 8
let subtraction = 10 - 4; // 6
let multiplication = 6 * 7; // 42
let division = 20 / 5; // 4
let modulus = 17 % 5; // 2
let exponentiation = 2 ** 3; // 8

// --- Type Coercion ---
let result1 = "2" * 8;
let result2 = "2" + 8;

// --- Comparison Operators ---
let a = 10;
let b = 20;
let c = "10";

// Greater than
console.log(b > a); // true

// Less than
console.log(a < b); // true

// Greater than or equal to
console.log(a >= 10); // true

// Less than or equal to
console.log(a <= 9); // false

// Soft equality (type coercion)
console.log(a == c); // true

// Strict equality (no type coercion)
console.log(a === c); // false

// Soft inequality
console.log(a != c); // false

// Strict inequality
console.log(a !== c); // true

// --- Logical Operators ---
let x = 5;
let y = 10;

// AND operator
console.log(x > 0 && y > 0); // true

// OR operator
console.log(x > 10 || y > 5); // true

// NOT operator
console.log(!(x > 10)); // true

// --- typeof Operator ---
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a JavaScript quirk)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"

// =====================================================
// CHAPTER 3: ARRAYS
// =====================================================

// --- Array Literal ---
let colors = ["Blue", "Red", "Green", "Yellow"];

// Without array (inefficient way)
let color1 = "Blue";
let color2 = "Red";
let color3 = "Green";

// --- Accessing values in an Array ---
console.log(colors[0]); // "Blue"
console.log(colors[1]); // "Red"
console.log(colors[2]); // "Green"

// --- Adding values to an Array ---
let cars = [];
cars[0] = "Toyota";
cars[1] = "BMW";
cars[2] = "Honda";
cars[3] = "Lexus";
console.log(cars); // ["Toyota", "BMW", "Honda", "Lexus"]

// Adding additional value
cars[4] = "Benz";

// --- Changing array values ---
cars[0] = "Mazda"; // Changes "Toyota" to "Mazda"

// --- Destructuring Arrays ---
let [firstColor, secondColor] = colors;
console.log(firstColor); // "Blue"
console.log(secondColor); // "Red"

let [first, , third] = colors; // Skip second element
console.log(first); // "Blue"
console.log(third); // "Green"

// --- The Spread Operator (...) ---
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6]

// Combining arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// --- String to Array ---
let word = "Hello";
let letters = [...word];
console.log(letters); // ["H", "e", "l", "l", "o"]

// --- Spread operator in function ---
function add(x, y, z) {
  return x + y + z;
}

let values = [1, 2, 3];

// Without spread operator
let sum1 = add(values[0], values[1], values[2]);

// With spread operator
let sum2 = add(...values);
console.log(sum2); // 6

//Array Properties and Methods
console.log(cars.length); // 5

// Access last value
console.log(cars[cars.length - 1]); // "Benz"

// Array methods examples
let fruits = ["Apple", "Banana", "Orange"];

// push() - adds to end
fruits.push("Mango");
console.log(fruits);

// pop() - removes from end
fruits.pop();
console.log(fruits);

// unshift() - adds to beginning
fruits.unshift("Grape");
console.log(fruits);

// shift() - removes from beginning
fruits.shift();

console.log(fruits.indexOf("Banana")); // 1

console.log(fruits.includes("Apple")); // true

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8

let userAge = 18;

if (userAge >= 18) {
  console.log("You are an adult");
}

let myAge = 16;

if (myAge >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

myAge = 27;
if (myAge >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

let status = userAge >= 18 ? "Adult" : "Minor";
console.log(status);

let canVote = userAge >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);

let diceRoll = 5;
if (diceRoll === 1) {
  console.log("You rolled a one");
} else if (diceRoll === 2) {
  console.log("You rolled a two");
} else if (diceRoll === 3) {
  console.log("You rolled a three");
} else if (diceRoll === 4) {
  console.log("You rolled a four");
} else if (diceRoll === 5) {
  console.log("You rolled a five");
} else if (diceRoll === 6) {
  console.log("You rolled a six");
} else {
  console.log("Invalid roll");
}

let count = 10;

while (count > 0) {
  console.log(count);
  count--;
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let x = 1; x <= 10; x++) {
  for (let y = 1; y <= 10; y++) {
    console.log(`${x} mul ${y} = ${x * y}`);
  }
}

let animals = ["Cat", "Dog", "Bird", "Fish"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

let studentNames = ["Alice", "Bob", "Charlie", "David"];

for (let i = 0; i < studentNames.length; i++) {
  console.log(`Student ${i + 1}: ${studentNames[i]}`);
}
