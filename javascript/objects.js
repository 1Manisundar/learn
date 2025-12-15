/**
 * Represents a generic object concept with key-value pairs.
 * Objects in JavaScript are collections of properties, where each property
 * is defined as a key-value pair. Keys are strings (or symbols), and values
 * can be any data type, including other objects or functions.
 *
 * Example:
 * const obj = {
 *   key1: 'value1',
 *   key2: 42,
 *   key3: function() { return 'Hello'; }
 * };
 *
 * Objects are fundamental to JavaScript and are used to model real-world entities,
 * store data, and encapsulate functionality.
 */


//ways to create an object
// 1. Object Literal Syntax
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person["name"], person.age);
person["gender"] = 'male';
console.log(person);

//for in loop to iterate over object properties
for (let key in person) {
    console.log(key); // prints property name
    console.log(person[key]); // prints property value
    document.write(`Property ${key} :: ${person[key]} <br>`); // prints property name and value
}

// 2. Object Constructor Syntax
const person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.city = "New York";

// 3. Object.create() Method
const person3 = Object.create(person);
person3.name = "Jane";
person3.age = 25;
person3.city = "Los Angeles";

// 4. Class Syntax (ES6) using new operator with constructor
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
const person4 = new Person("Alice", 28, "San Francisco");
const person4_1 = new Person("Ali", 48, "San jose");
console.log(person4, person4_1);

// 5. Factory Function
function createPerson(name, age, city) {
    return {
        name: name,
        age: age,
        city: city
    };
}
const person5 = createPerson("Bob", 35, "Chicago");

// 6. JSON (JavaScript Object Notation)
const jsonString = '{"name": "Charlie", "age": 40, "city": "Miami"}';
const person6 = JSON.parse(jsonString);

// 7. Using a Constructor Function
function PersonConstructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
const person7 = new PersonConstructor("David", 32, "Seattle");