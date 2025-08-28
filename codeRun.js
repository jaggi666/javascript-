// call stack
// execution context = the environment in which JavaScript code is executed
// lexical environment = the structure that holds variable bindings
// variable environment = the environment where variables are stored
// scope chain = the chain of lexical environments that JavaScript uses to resolve variable names


// javascript run = the process of executing JavaScript code
// global execution context = the outermost context in which JavaScript code is executed
// function execution context = the context created when a function is invoked
// execution context stack = the stack of execution contexts that are created during the execution of JavaScript

let val1 = 10;
let val2 = 20;
function addnum(num1, num2) {
  let total = (num1 + num2);
  return total;
}

let result = addnum(val1, val2);
let result2 = addnum(50, 60);

// explain
// global execution context

// memory phase

// val1 = undefined
// val2 = undefined
// addnum = defination 
// result= undefined
// result2= undefined

// execution phase
// val1 = 10
// val2 = 20
// addnum = defination
// global execution(addnum = new variable environment + execution thread
// memory phase
// num1 = undefined
// num2 = undefined
// total = undefined
// execution phase= num1 = 10
// num2 = 20
// total = 30
// )delete hoga
// result= 30

// result2= undefined
// run
// global execution(addnum = new variable environment + execution thread
// memory phase
// val1 = undefined
// val2 = undefined
// total = undefined
// execution phase= val1 = 50
// val2 = 60
// total = 110
// )delete hoga
// result2= 110


// call stack
// lifo name concept chalda
// last in first out
// jab function call hota hai to vo stack me chala jata hai
// jab function ka kaam ho jata hai to vo stack se nikal jata hai   


// function one(params) {
//     console.log("one");
// }
// function two(params) {
//     console.log("two");
// }
// function three(params) {
//     console.log("three");
// }

// one();
// two();
// three();

function one(params) {
    console.log("one");
    two();
}
function two(params) {
    console.log("two");
    three();
}
function three(params) {
    console.log("three");
}

one();

// console inspect google 
// call stack process check
// one()
// two()
// three()
