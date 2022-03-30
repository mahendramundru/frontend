//function scope will create fresh variables for var, const, let
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


var a;
var a0 = 0;
console.log(a);
var a1 = 10;
console.log(a0);
console.log(a1);
//for var: block scope does not create new variables with same name rather modifies the existing var value
{
    var a1 = 10000;

}

//for let,const: block scope {} shadows the parent only within the block
let x1 = 11;
{
    let x1 = 12;
    console.log(x1);
}
console.log(x1);

f1();
console.log(a1);

