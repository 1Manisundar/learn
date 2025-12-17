// /////// TOPIC 1: How JavaScript Works & Execution Context/////////////


// console.log("Start");  // prints 1st

// function a() { // function declaration is hoisted
//   console.log("Inside A");
// }

// a(); // calling function after declaration
// console.log("End");// prints last


// console.log(x); // undefined
// var x = 10; // initialise
// console.log(x); //prints 10


// var x = 1; // x add to Execution context undefined

// function test() { // function declaration added to Execution context
//   console.log(x);
//   var x = 20;
//   console.log(x);
// }

// test(); // calling function.

// //now oupput will undefined, 20.

// // console.log(a());

// // function a() {
// //   return 5;
// // }


// console.log("A"); // prints 1st .....1

// function first() { // first is declared in Execution context
//   console.log("B"); // prints 4th ..........5
// }

// function second() { // second is declared in Execution context
//   console.log("C"); // prints 2nd ..........3
//   first();// calls 3rd ..........4
// }

// second(); // calls 2nd .........2
// console.log("D"); // prints last .........6



/////////TOPIC 2: Execution Context Phases & Call Stack/////////////

// function one() { // declared 1st in EC 
//   console.log("One"); //3.............. prints 3rd
// }

// function two() { // declared 2nd in EC
//   console.log("Two"); //1...... prints 1st
//   one(); //2........calls 2nd
//   console.log("Two End");// 4........ prints 4th
// }

// two(); // called 1st

// /////

// function a() { // declared in EC
//   console.log("A start"); //1......prints 1st
//   b(); //2........calls 2nd
//   console.log("A end"); //4........prints 3rd
// }

// function b() { // declared in EC
//   console.log("B"); //3........prints 2nd
// }

// a(); // called 1st


// //////

// function x() {
//   console.log("X"); //1. prints 1st
//   y(); // 2... calls 2nd
// }

// function y() {
//   console.log("Y"); //3. prints 2nd
//   z(); //4. calls 3rd
// }

// function z() {
//   console.log("Z"); //5. prints 3rd
// }

// x(); // calls 1st



// ///////////


// function test(n) { //n is 3 now
//   if (n === 0) return; // 3 != 0 so continue
//   console.log(n);// prints 3 
//   test(n - 1);// calls test(2). so prints 2 and then 1 then returns
// }

// test(3);

////////

// function a() {
//   console.log("A");
// }

// function b() {
//   a(); // calls 3rd
// }

// function c() {
//   b(); // calls 2nd
// }

// c(); // calls 1st


////////TOPIC 3: HOISTING (Variables & Functions)/////////////

// console.log(a); // undefined due to hoisting
// var a = 10;

// console.log(b);
 // reference error 

//  getName(); // prints console. as getname is initialized in hoisting phase

// function getName() {
//   console.log("Namaste JS");
// }


// getName(); // TypeError: getName is not a function beacuse funcatons can store whole code when initialized using var, but varialbles just declares.

// // var getName = function () { // taken as variable declaration not as function declaration
// //   console.log("Namaste JS");
// // };

// var getName = () => { // this also same
//   console.log("Namaste JsS");
// };


// console.log(x); // undefined
// var x = 5;

// function test() {
//   console.log(x); // undefined due to hoisting of var x inside function 
//   // why because now we are inside function Excution context. here x is decleared but calls before initialisation.
//   var x = 20;
// }

// test(); // calls 2nd

// console.log(typeof a); // undefined 

// var a = function () {};







////// TOPIC 4: Functions & Variable Environment////

var x = 10;

function test() {
  var x = 20;
  console.log(x); //20
}

test();
console.log(x);//10



var x = 5;

function a() {
  console.log(x); // 5 because js first looks for variable in local environment if not found then looks in outer environment(global)
}

function b() {
  var x = 20;
  a();
}

b();


var x = 1;

function outer() {
  var x = 2;

  function inner() {
    console.log(x);
  }

  inner();
}

outer(); // prints 2 because inner function first looks for variable in its local environment if not found then looks in outer environment(outer function here)



function test() {
  x = 10;
}

test();
console.log(x);  // how x is accessible here? because when we assign value to x without var/let/const inside function it becomes global variable. so x is created in global scope.



/////////Shortest JS Program, window & this///////

var a = 10;
console.log(window.a); // 10 because var creates property on window object

var a = 5;
console.log(this.a); // 5 because in global scope this refers to window object

function test1() {
  console.log(this); // shows window object because function called in global scope
}

test1();


