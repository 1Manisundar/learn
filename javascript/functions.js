//================ Funtions ======================

// Function to get the current date in YYYY-MM-DD format

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
}

console.log(getCurrentDate()); // Example output: 2023-10-05

// Function to get the sum of two numbers
function sum(a, b) {
  var sumVal = a + b;
  return 
  ;
}

const values = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 5, b: 6 },
];

values.forEach((value) => {
  console.log("sum is:", sum(value.a, value.b));
});


// function to get given number is even or odd

function isEven(num){
    if(num % 2 === 0){
        return 'Even';
    }
    else
    {
        return 'odd';
    }
}
console.log(isEven(10)); 


// function to find the largest number in an array
function findLargest(arr){
    let largest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}
const numbers = [1, 209, 3, 44, 5564, 6, 7, 8, 9];

console.log("Largest number is:", findLargest(numbers));


// function to find the largest of three numbers

function findMax(a, b, c){
    if(a >= b && a >= c){
        return a;
    } else if(b >= a && b >= c){
        return b;
    } else {
        return c;
    }
}

console.log("Largest number is:", findMax(10, 20, 30)); // 30

//function to reverse a string
function reverseString(str){
    let reversed = '';
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log("Reversed string is:", reverseString("Hello World")); // dlroW olleH

// function to check if a string is a palindrome
function isPalindrome(str){
    let reversed = reverseString(str);
    if(reversed === str){
        return true;
    } else {
        return false;
    }
}
console.log("Is palindrome:", isPalindrome("madam")); // true
console.log("Is palindrome:", isPalindrome("hello")); // false

