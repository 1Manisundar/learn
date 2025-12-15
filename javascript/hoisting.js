//Accessing variables before they are declared gives errors.
// Hoisting is a JavaScript mechanism where variables can be used before they are declared in the code.

// Hoisting applies to variable declarations (using var) and function declarations, but not to let/const variables or function expressions.

message = "This is a hoisted variable";
console.log(message); // This will log "This is a hoisted variable"

var message; // Declaration is hoisted to the top of the scope

test1= "This is a test variable";
console.log(test1); // This will log "This is a test variable"

let test1; // Declaration is not hoisted, so this will throw an error if used before declaration