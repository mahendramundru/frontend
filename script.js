//lexical environment
// global environment -> f1 environment local -> f2 environment local 
// f2 can access variables in its scope and varibles in parent scope, and so on until variables in global scope
function f1(){
    var a1 = 1;
    f2();
    function f2(){
        var a2 = 2;
        console.log(a2);
        console.log(a1);
        console.log(a0);
    }
}

var a0 = 0;
var a1 = 10;
console.log(a0);
console.log(a1);
f1();

