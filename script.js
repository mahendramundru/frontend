//let and const keywords introduced in ES6 version of javascript
// let is similar to variable in java/c etc
// const is constant initialized while declaring and can't change later
// don't use var, use let whenver possible
// temporal dead zone : variable declared using let but till initialized it can't be accessed (and also they are not stored in global environment)

console.log(a);//Uncaught ReferenceError: Cannot access 'a' before initialization
let a; //initialized with undefined
console.log(a);
a = 5;
console.log(a);

const c = 100;
console.log(c);

console.log(v);
var v;
console.log(v);
v = 1000;
console.log(v);

