// ============= global scope, local scope, block scope ================


// global scope: variables declared outside of any function or block
let globalVar = "I am a global variable";

// local scope: variables declared inside a function
function myFunction() {
    let localVar = "I am a local variable";
    console.log(globalVar); // accessible
    console.log(localVar); // accessible
}
myFunction(); // call the function
// console.log(localVar); // ReferenceError: localVar is not defined

//block scope: variables declared inside a block (e.g., if statement, for loop)
function myBlockFunction() {
    if (true) {
        let blockVar = "I am a block variable";
        var blockVar2 = "I am a block variable with var";
        const blockVar3 = "I am a block variable with const";
        console.log(blockVar); // accessible
    }

    console.log(blockVar2); // accessible
    console.log(blockVar); // ReferenceError: blockVar is not defined
    console.log(blockVar3); // ReferenceError: blockVar3 is not defined
}
myBlockFunction(); // call the function
// blockVar2,3 is not accessible outside the block