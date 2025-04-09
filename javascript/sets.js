// ============== SETS ===================

// A Set is a collection of values where each value must be unique.
// Sets are iterable, meaning you can loop through them.
// Sets are not indexed, meaning you cannot access elements by index.
// Sets can store any type of value, including objects and functions.
// Sets are mutable, meaning you can add and remove elements.
// Sets are useful for storing unique values and preventing duplicates.

// Example: Creating a Set
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(1); // Duplicate value, will not be added
a1 =[1,1,1,12,3,4,5,66];
mySet.add(a1); // Adding an array to the set

let set2 = new Set(a1);
console.log(set2); // Set(6) { 1, 12, 3, 4, 5, 66 }
console.log(mySet);

// deleting elements from a set
mySet.delete(1); // Removes the value 1 from the set
console.log(mySet);

mySet.clear(); // Removes all elements from the set
console.log("cleared all data",mySet); 


// Managing unique email addresses using a Set with prompt and alert

const emailSet = new Set();

function addEmail() {
    const email = prompt("Enter an email address:");
    if (!email) {
        alert("No email entered. Exiting.");
        return;
    }

    if (emailSet.has(email)) {
        alert(`The email "${email}" already exists.`);
    } else {
        emailSet.add(email);
        alert(`The email "${email}" has been added.`);
    }
}

// Example: Loop to continuously prompt for emails
while (true) {
    const action = prompt("Enter 'add' to add an email or 'exit' to quit:");
    if (action === "exit") {
        alert("Exiting the program.");
        break;
    } else if (action === "add") {
        addEmail();
    } else {
        alert("Invalid input. Please enter 'add' or 'exit'.");
    }
}

console.log("All unique emails:", Array.from(emailSet));

