// Types of functions:

// 1. Named Function
function greet(name) {
    console.log("Hello from named function! "+name);
}
greet('John')

// 2. Anonymous Function
let demo = function (name){
    console.log("Hello from anonymous function",name);
}
demo("Alice")

// 3. Arrow Functions
let divide = (a,b) => {
    console.log(a/b);
}
divide(10,5)
