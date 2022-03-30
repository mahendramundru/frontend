// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.
console.log(square(10));

console.log(x);
function square(num){
    return num*num;
}
var x = 10;
var square2 = (n) => {
    return n*n;
}

var square3 = function(m){
    return m*m;
}

console.log(square2(20));
console.log(square3(100));
