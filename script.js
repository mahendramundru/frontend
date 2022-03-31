for(var i=1; i<=10; i++){  // for each iteration it creates a separate i
    setTimeout(function(i){
        console.log(i); // for each of this inner function has a separate let i
        
    }, i*1000, i);
}
