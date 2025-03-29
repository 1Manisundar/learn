
//if statement

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

//if else statement

let age2 = 16;

if (age2 >= 18) {
    console.log("You are an adult.");
    }
else {
    console.log("You are a minor.");
}

//if else if statement

let age3 = 20;

if (age3 < 13) {
    console.log("You are a child.");
} else if (age3 < 20) {
    console.log("You are a teenager.");
}
else {
    console.log("You are an adult.");
}

//ternary operator
let age4 = 18;
let message = (age4 >= 18) ? "You are an adult in ternary." : "You are a minor.";
console.log(message);

//switch statement

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// practice

let score = 100;

if (score >=90){
    console.log("Grade: A");
} else if (score >=75){
    console.log("Grade: B");
} else if (score >=50){
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

