// ========= All about DOM ==========

// DOM (Document Object Model) is a programming interface for web documents.
// It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content and structure of web pages.

// The DOM provides a way to access and modify the elements, attributes, and styles of a web page.
// It allows developers to create dynamic and interactive web applications by manipulating the HTML and CSS of a page.


//example of DOM manipulation


// 1. Selecting elements
// document.getElementById("elementId"); // Selects an element by its ID
// document.getElementsByClassName("className"); // Selects elements by their class name
// document.getElementsByTagName("tagName"); // Selects elements by their tag name
// document.querySelector("selector"); // Selects the first element that matches the CSS selector
// document.querySelectorAll("selector"); // Selects all elements that match the CSS selector

// 2. Creating elements
// document.createElement("tagName"); // Creates a new element
// document.createTextNode("text"); // Creates a new text node
// document.appendChild(element); // Appends an element to the document
// document.removeChild(element); // Removes an element from the document

// 3. Modifying elements
// element.innerHTML = "New content"; // Sets the HTML content of an element
// element.innerText = "New text"; // Sets the text content of an element
// element.style.property = "value"; // Sets the CSS style of an element
// element.setAttribute("attribute", "value"); // Sets an attribute of an element
// element.getAttribute("attribute"); // Gets the value of an attribute
// element.classList.add("className"); // Adds a class to an element
// element.classList.remove("className"); // Removes a class from an element

// 4. Event handling
// element.addEventListener("event", function); // Adds an event listener to an element
// element.removeEventListener("event", function); // Removes an event listener from an element
// element.dispatchEvent(event); // Dispatches an event to an element

// 5. Traversing the DOM
// element.parentNode; // Gets the parent node of an element
// element.childNodes; // Gets the child nodes of an element
// element.firstChild; // Gets the first child node of an element
// element.lastChild; // Gets the last child node of an element
// element.nextSibling; // Gets the next sibling node of an element
// element.previousSibling; // Gets the previous sibling node of an element
// element.children; // Gets the child elements of an element
// element.firstElementChild; // Gets the first child element of an element
// element.lastElementChild; // Gets the last child element of an element
// element.nextElementSibling; // Gets the next sibling element of an element
// element.previousElementSibling; // Gets the previous sibling element of an element
// element.closest("selector"); // Gets the closest ancestor that matches the selector
// element.contains(element); // Checks if an element contains another element

// 6. Example: Changing the background color of a div element
// const divElement = document.getElementById("myDiv");
// divElement.style.backgroundColor = "blue"; // Changes the background color to blue
// divElement.style.color = "white"; // Changes the text color to white

//example for getting elements by id

let x1 = document.getElementById("h1");
let x1_1 = document.getElementById("h1").innerHTML;
console.log(x1_1); // prints the inner html of the element with id h1
console.log(x1);

//example for getting elements by class name

let x2 = document.getElementsByClassName("p");
console.log(x2); 

//example for getting elements by tag name
let x3 = document.getElementsByTagName("h1");
console.log(x3); // prints the h1 elements

//example for getting elements by query selector
let x4 = document.querySelector(".p");
console.log(x4); // prints the first element with class p

//example for getting elements by query selector all
let x5 = document.querySelectorAll(".p");
console.log(x5); // prints all elements with class p


//elements
//document.body; // Gets the body element of the document
//document.head; // Gets the head element of the document
//document.title; // Gets the title of the document
//document.anchor; // Gets the first anchor element of the document
//document.links; // Gets all the links in the document 


//examples for dom manipulation

//creating elements
let parent = document.getElementById("test"); // Gets the parent element
let n = document.createElement("h1"); // Creates a new h1 element
n.setAttribute("id", "last"); // Sets the id of the h1 element
console.log(n); // prints the new h1 element
n.innerHTML = "Hello World"; // Sets the inner HTML of the h1 element
parent.appendChild(n); // Appends the h1 element to the body of the document

console.log(parent.innerHTML); // prints the inner HTML of the parent element with tags
console.log(parent.innerText); // prints the inner text of the parent element without tags

//adding element before existing element

let n2 = document.createElement("h1"); // Creates a new h1 element
n2.innerHTML = "Added before old element"; // Sets the inner HTML of the h1 element
parent.insertBefore(n2, n); // Inserts the new h1 element before the existing h1 element

//removing element

let n3 = document.getElementById("remove");
n3.remove(); // Removes the element with id remove
console.log(n3); // prints null because the element is removed


//remove child

parent.removeChild(n);



// styling elements

 var x = document.getElementById('style');
 x.style.color = 'pink'; // Changes the color of the text to pink
 x.style.border = '2px solid red'; // Adds a border to the element
 console.log(x.style,"styles"); // Prints the color of the element

 //adding class to an element

 console.log('get id of elemetnt', x.id); // Prints the id of the element ,,, we can also use getAttribute method to get the id of the element

 //setting class to an element
 x.className = 'stl1'; // we can also use setAttribute method to set the class of the element

 x.id = 'stl2'; // we can also use setAttribute method to set the id of the element