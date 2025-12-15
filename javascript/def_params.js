// =============== Default Parameters ===============
// Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//example
// function to greet a user with default name
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("MANI"); // Output: Hello, John!

// function to add two numbers with default values
function add(a = 0, b = 0) {
    return a + b;
}
console.log(add()); // Output: 0

console.log(add(5)); // Output: 5
console.log(add(5, 10)); // Output: 15
console.log(add(5, 20, 15)); // Output: 25 3rd parameter is ignored


// =============== Rest Parameters ===============
// Rest parameters allow us to represent an indefinite number of arguments as an array.
// Example: function to calculate the sum of any number of arguments
function sum(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output: 55


// function to multiply atleast 2 numbers

function multiply(a, b, ...args) {
    console.log(arguments); //saves all the arguments passed to the function
    let product = a * b;
    for (let num of args) {
        product *= num;
    }
    return product;
}
console.log(multiply(2, 3)); // Output: 6
console.log(multiply(2, 3, 4, 5)); // Output: 120