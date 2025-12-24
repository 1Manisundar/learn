<!-- NOTES -->

Javascript is <ins>synchronos</ins> single threaded language.
    i.e; Which means JS executes only 1 command at a time in a specific order.

## Execution Context

## 1. What is Execution Context?

**Definition:** An execution context is an abstract environment where JavaScript code is evaluated and executed. It contains all the information needed to run a piece of code.

**Key Point for Interviews:** "Execution context is the environment in which JavaScript code runs, containing information about variables, functions, scope, and the `this` keyword."

---

## 2. Types of Execution Contexts

### Global Execution Context (GEC)
- Created when the script first loads
- Only ONE global context exists
- Creates the global object (`window` in browser, `global` in Node.js)
- Sets `this` to the global object

### Function Execution Context (FEC)
- Created every time a function is invoked
- Each function call creates a new context
- Has its own variable environment and scope

### Eval Execution Context
- Created inside `eval()` function
- Rarely used (avoid in production)

---

## 3. Execution Context Phases

### Phase 1: Creation Phase (Memory Creation)
During this phase, JavaScript:
1. Creates the Variable Environment (VO/AO)
2. Creates the Scope Chain
3. Determines the value of `this`

**What happens:**
- Variables are declared and initialized with `undefined` (hoisting)
- Function declarations are stored in memory completely
- `let` and `const` are hoisted but in "temporal dead zone"

### Phase 2: Execution Phase
- Code is executed line by line
- Variables are assigned their actual values
- Functions are invoked

---

## 4. Components of Execution Context

```
Execution Context = {
    Variable Environment: {
        Environment Record (variables, functions),
        Reference to outer environment
    },
    Scope Chain,
    this binding
}
```

---

## 5. Call Stack (Execution Stack)

The call stack manages execution contexts using LIFO (Last In, First Out).

**How it works:**
1. Global EC is pushed to the stack
2. When a function is called, its EC is pushed
3. When function completes, its EC is popped
4. Process continues until the stack is empty

### Visual Call Stack Diagram

```javascript
function first() {
    console.log("First function");
    second();
    console.log("First function end");
}

function second() {
    console.log("Second function");
    third();
    console.log("Second function end");
}

function third() {
    console.log("Third function");
}

first();
```

**Step-by-step Call Stack:**

```
Step 1: Script starts
┌─────────────────┐
│   Global EC     │
└─────────────────┘

Step 2: first() is called
┌─────────────────┐
│   first() EC    │
├─────────────────┤
│   Global EC     │
└─────────────────┘

Step 3: second() is called (inside first)
┌─────────────────┐
│  second() EC    │
├─────────────────┤
│   first() EC    │
├─────────────────┤
│   Global EC     │
└─────────────────┘

Step 4: third() is called (inside second)
┌─────────────────┐
│   third() EC    │  ← Top of stack (currently executing)
├─────────────────┤
│  second() EC    │
├─────────────────┤
│   first() EC    │
├─────────────────┤
│   Global EC     │
└─────────────────┘

Step 5: third() completes and is popped
┌─────────────────┐
│  second() EC    │  ← Resumes execution
├─────────────────┤
│   first() EC    │
├─────────────────┤
│   Global EC     │
└─────────────────┘

Step 6: second() completes and is popped
┌─────────────────┐
│   first() EC    │  ← Resumes execution
├─────────────────┤
│   Global EC     │
└─────────────────┘

Step 7: first() completes and is popped
┌─────────────────┐
│   Global EC     │  ← Back to global
└─────────────────┘
```

**Console Output:**
```
First function
Second function
Third function
Second function end
First function end
```

---

## 6. Interview Code Examples

### Example 1: Basic Execution Flow

```javascript
var x = 10;

function foo() {
    var y = 20;
    console.log(x + y);
}

foo(); // 30
console.log(y); // ReferenceError: y is not defined
```

**Explanation:**
- Global EC: `x = 10`, `foo` function
- When `foo()` called: Function EC created with `y = 20`
- `foo` can access `x` via scope chain
- Global EC cannot access `y` (it's local to `foo`)

### Example 2: Hoisting

```javascript
console.log(a); // undefined (not ReferenceError!)
var a = 5;
console.log(a); // 5

greet(); // "Hello!" - works!
function greet() {
    console.log("Hello!");
}

sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
    console.log("Hi!");
};
```

**Explanation:**
- `var` declarations are hoisted and initialized with `undefined`
- Function declarations are fully hoisted
- Function expressions are treated like variables (hoisted as `undefined`)

### Example 3: let/const Temporal Dead Zone

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;

console.log(y); // ReferenceError
const y = 20;
```

**Explanation:**
- `let` and `const` are hoisted but not initialized
- They remain in "temporal dead zone" until declaration is reached

### Example 4: Nested Functions & Scope Chain

```javascript
var a = 10;

function outer() {
    var b = 20;
    
    function inner() {
        var c = 30;
        console.log(a + b + c); // 60
    }
    
    inner();
}

outer();
```

**Execution Stack:**
```
1. Global EC (a = 10, outer)
2. outer() EC pushed (b = 20, inner)
3. inner() EC pushed (c = 30)
4. inner() EC popped
5. outer() EC popped
6. Only Global EC remains
```

### Example 5: Tricky `this` Binding

```javascript
var name = "Global";

const obj = {
    name: "Object",
    getName: function() {
        console.log(this.name);
    }
};

obj.getName(); // "Object"

const func = obj.getName;
func(); // "Global" (in non-strict mode) or undefined (in strict mode)
```

**Explanation:**
- `this` depends on how the function is called
- `obj.getName()`: `this` refers to `obj`
- `func()`: `this` refers to global object (or undefined in strict mode)

---

## 7. Common Interview Questions

### Q1: What is hoisting?
**A:** Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the creation phase of execution context. Variables declared with `var` are initialized with `undefined`, while `let`/`const` remain uninitialized.
**B:** Gap between hoisting and initialization is called Temporal Dead Zone.
**C:** Functions declared with arrow notation => or Var function are both taken as variables.

### Q2: Difference between var, let, and const in context of EC?
**A:**
- `var`: Function-scoped, hoisted and initialized with `undefined`
- `let`/`const`: Block-scoped, hoisted but not initialized (TDZ)
- `const`: Additionally, cannot be reassigned

### Q3: What is the scope chain?
**A:** The scope chain is a list of all variable environments that a function has access to, including its own environment and all outer environments up to the global scope. It's used for variable lookup.

### Q4: Explain the call stack
**A:** The call stack is a LIFO data structure that tracks execution contexts. When a function is called, its EC is pushed; when it returns, the EC is popped. Stack overflow occurs when too many contexts are pushed (usually from infinite recursion).

---

## 8. Advanced Example: Closures & EC

```javascript
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
```

**Why this works:**
- Each `createCounter()` call creates a new Function EC
- The returned function maintains reference to its outer scope (closure)
- Each counter has its own independent `count` variable

---

## 9. Key Takeaways for Interviews

1. **EC has two phases:** Creation (memory allocation) and Execution
2. **Call stack manages EC** using LIFO principle
3. **Hoisting** happens during the creation phase
4. **Scope chain** determines variable access
5. **`this` binding** depends on how functions are called
6. **Closures** work because functions remember their lexical scope
7. When JS compiler runs, JS creates a global object <ins>"window"</ins> Which is also <ins>this</ins> variable. (any code present in file will be automatically added to window element). **NOTE** Declarations inside functions are not comes under gloval scope.


---

## 10. Practice Questions

Try to predict the output:

```javascript
// Question 1
console.log(foo);
var foo = 10;
function foo() {
    return 5;
}
console.log(foo);

// Question 2
for(var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// Question 3
for(let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}
```

**Answers:**
1. First logs the function, then logs 10 (function declarations are hoisted first)
2. Logs: 3, 3, 3 (`var` is function-scoped, same `i` for all timeouts)
3. Logs: 0, 1, 2 (`let` is block-scoped, each iteration has its own `j`)







