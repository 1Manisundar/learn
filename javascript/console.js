// ============= All about consoles =============

console.clear(); // Clears the console

console.log("Hello World"); // Prints "Hello World" to the console
console.info("This is an info message"); // Prints an info message to the console
console.warn("This is a warning message"); // Prints a warning message to the console
console.error("This is an error message"); // Prints an error message to the console
console.table([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Alice", age: 28 }
]);
// Prints a table to the console
console.debug("This is a debug message"); // Prints a debug message to the console
console.assert(1 === 2, "This is an assertion error"); // Prints an assertion error if the condition is false
console.count("Count label"); // Increments the count for the specified label
console.countReset("Count label"); // Resets the count for the specified label
console.time("timer"); // Starts a timer
console.timeLog("timer"); // Logs the elapsed time since the timer started
console.timeEnd("timer"); // Stops the timer and prints the elapsed time
console.group("Group Title"); // Starts a new group in the console
console.log("Grouped message 1"); // Prints a message in the group
console.log("Grouped message 2"); // Prints another message in the group
console.groupEnd(); // Ends the group


console.trace("Trace message"); // Prints a stack trace to the console
console.dir(document.body); // Prints the DOM tree of the document body
console.timeStamp("Timestamp message"); // Adds a timestamp to the console
console.profile("Profile name"); // Starts a profiling session
console.profileEnd("Profile name"); // Ends the profiling session