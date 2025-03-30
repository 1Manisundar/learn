// // ====================== for loop ====================
// // for loop is used to iterate over a block of code a number of times
// // Syntax:
// // for (initialization; condition; increment/decrement) {
// //     // code block to be executed
// // }

// // Example: print numbers from 1 to 10
// // using for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// // Example: print even numbers from 1 to 20
// // using for loop
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// // Example: print odd numbers from 1 to 20
// // using for loop
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
// // Example: print multiplication table of 5
// // using for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }
// // Example: print sum of first n numbers
// let input = +prompt("Enter a number: ");
// let i = 1;
// let sum = 0;
// for(i; i<=input; i++){
//     console.log(i);
//     sum += i;
//     console.log("Sum is: " + sum);
// }

// document.write(`Sum of first ${input} numbers is: ${sum}`);


// // Example: print sum of even numbers from 1 to n
// let input2 = +prompt("Enter a number: ");
// let i2 = 1;
// let sum2 = 0;
// for(i2; i2<=input2; i2++){
//     if(i2 % 2 === 0){
//         console.log(i2);
//         sum2 += i2;
//         console.log("Sum of even numbers is: " + sum2);
//     }
// }

// document.write(`Sum of even numbers from 1 to ${input2} is: ${sum2}`);

// =================== while loop ================
// while loop is used to execute a block of code as long as the condition is true
// Syntax:
// while (condition) {
//     // code block to be executed
// }

// Example: print numbers from 1 to 10
// let i3 = 1;
// while (i3 <= 10) {
//     console.log(i3);
//     i3++;
// }

// Example: Exit loop when user enters 0

// let input0 = +prompt("Enter a number: ");
// while (input0 !== 0) {
//     document.write(`Entered number is ${input0} <br>`); // Use <br> for line break in HTML
//     console.log(`Entered number is ${input0}`);
//     // Exit loop when user enters 0

//     input0 = +prompt("Enter a number: ");
// }

// ==================== do while loop ================
// do while loop is similar to while loop, but it executes the code block once before checking the condition
// Syntax:
// do {
//     // code block to be executed
// } while (condition);

// Example: print numbers from 1 to 10

let i4 = 1;
do {
    console.log(i4);
    i4++;
}
while (i4 <= 10);
