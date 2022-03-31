function f0(){ // it is a closure function as it encloses the inner function
    var a0 = 0;
    return f1();
    function f1(){ // it is a closure function as it encloses the inner function
        var a1 = 1;
        // f2();
        function f2(){
            var a2 = 2;
            console.log(a2);
            console.log(a1);
            console.log(a0);
        }
        return f2; // returning the function f2 it will be returned along with its environment and it would be able to access a0, a1, a2 
    }
}
var rf = f0();
console.log(rf);
rf(); //calling the returned function


//not related to closure just testing some ideas
var tf = function ff(){
    console.log("hi");
}
tf();
var tf2 = function (){
    console.log("hi hi");
}
tf2();
