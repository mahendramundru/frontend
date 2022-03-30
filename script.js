//default global execution environment is window or this at global level
// anything not inside a function is in global environment
var x = 1;

function a(){
    var y = 3;
}

console.log(x);
console.log(window.x);
console.log(this.x);
console.log(this.a);
console.log(this == window);

