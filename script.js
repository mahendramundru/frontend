//variable overriding in variable environment
x = 1;

a();
b();

console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

function c(){
    console.log(x); //gives undefined
    var x = 1000;
}