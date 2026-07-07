// Array Method Practice

let fruits = ["Apple", "Orange", "Banana"];

// Original Array
console.log("Original Array");
console.log(fruits.join(", "));

console.log("");

// push()
fruits.push("Mango");
console.log("After push()");
console.log(fruits.join(", "));

console.log("");

// pop()
fruits.pop();
console.log("After pop()");
console.log(fruits.join(", "));

console.log("");

// shift()
fruits.shift();
console.log("After shift()");
console.log(fruits.join(", "));

console.log("");

// unshift()
fruits.unshift("Grapes");
console.log("After unshift()");
console.log(fruits.join(", "));

console.log("");

// splice()
fruits.splice(1, 1, "Pineapple");
console.log("After splice()");
console.log(fruits.join(", "));

console.log("");

// slice()
let newFruits = fruits.slice(0, 2);
console.log("After slice()");
console.log(newFruits.join(", "));

console.log("");

// Original Array After All Operations
console.log("Original Array");
console.log(fruits.join(", "));