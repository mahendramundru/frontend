for(var i=1; i<=10; i++){  
    setTimeout(function(x){ //here this x is an argument within the function scope
        console.log(x); // for each of this inner function has a separate let i
        
    }, i*1000, i); // this i value will be passed to that argument
}
