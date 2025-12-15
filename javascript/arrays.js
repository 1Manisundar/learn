// ========== Arrays ==========

// declaration of an array

// can store multiple data types

let arr = [1, 2, 3, 4, 5, { age: 20, gender: "male" }];

let arr2 = new Array(1, 2, 3, 4, 5, { age: 40 });

// accessing elements of an array
console.log("arr is",arr); // [1, 2, 3, 4, 5]
console.log("5th element lo age ",arr[5].age); // 20
console.log(`length is ${arr.length}`); // 5
console.log(arr[0]); // 1

//adding elements to an array
arr.push(6); // adds 6 to the end of the array
arr.push({ hehe: 100 }); // adds {hehe: 100} to the end of the array
arr.unshift("hehe");
console.log("arr after adding elements", arr); // [ 'hehe', 1, 2, 3, 4, 5, { age
console.log("length after adding elements", arr.length);

//methods of array
//arr.pop(); // removes the last element of the array
//arr.push(); // adds an element to the end of the array
//arr.shift(); // removes the first element of the array
//arr.unshift(); // adds an element to the beginning of the array
//arr.splice(); // removes elements from the array
//arr.slice(); // returns a shallow copy of a portion of an array
//arr.concat(); // merges two or more arrays
//arr.indexOf(); // returns the first index at which a given element can be found in the array

let newArray = ["a"];

console.log("new array", newArray); // ['a']

// adding elements to the array using push method
newArray.push("b");
console.log("new array after adding element", newArray); // ['a', 'b']

// deleting last element of the array using pop method
newArray.pop();
console.log("new array after deleting last element", newArray); // ['a']

// adding elements to the array using unshift method
newArray.unshift("c");
console.log("new array after adding element at beginning", newArray); // ['c', 'a']

// deleting first element of the array using shift method

newArray.shift();
console.log("new array after deleting first element", newArray); // ['a']

// indexOf method NOTE if the 2 elements are same then it will return the first index of the element
let index = newArray.indexOf("a");
console.log("index of 'a' in new array", index); // 0

let index2 = newArray.indexOf("b");
console.log("index of 'b' in new array", index2); // displays -1 because 'b' is not in the array


// slice method

let slicedArray =["abc", "def", "ghi", "jkl", "mno"];
//========index = [ 0,     1,     2,     3,     4 ] ====
console.log("sliced array", slicedArray.slice(1, 3)); // ['def', 'ghi']


//splice method
let splicedArray = ["abc", "def", "ghi", "jkl", "mno"];
//========index = [ 0,     1,     2,     3,     4 ] ====

console.log("spliced array", splicedArray.splice(1, 3)); // ['def', 'ghi', 'jkl']
// splice method removes elements from the array and returns the removed elements