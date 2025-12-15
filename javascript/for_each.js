// ============== forEach.js ==============

var salaries = [1000, 2000, 3000, 4000, 5000];

// Using forEach to iterate over the array
salaries.forEach(function(salary) {
  console.log("Salary: " + salary);
});

// Using forEach with arrow function
salaries.forEach((salary) => {
  console.log("Salary: " + salary);
});

// Using forEach with index
salaries.forEach((salary, index) => {
  console.log("Salary at index " + index + ": " + salary);
});

// Using forEach with index and array
salaries.forEach((salary, index, array) => {
  console.log("Salary at index " + index + ": " + salary);
  console.log("Array: ", array);
});

// Using forEach with thisArg
const obj = {
  multiplier: 2,
};
salaries.forEach(function(salary) {
  console.log("Salary multiplied by " + this.multiplier + ": " + (salary * this.multiplier));
}, obj);


//increment salary by 10%

function increment(salary, index, array) {
    let increment = salary/10;
    array[index] = salary + increment;
    };
salaries.forEach(increment);
console.log("Updated salaries: ", salaries);

//example of forEach with an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
// Using forEach to iterate over the properties of an object
Object.keys(person).forEach(function(key) {
    console.log(key + ": " + person[key]);
});