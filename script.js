for(let i=1; i<=10; i++){  // for each iteration it creates a separate i
    setTimeout(function(){
        console.log(i); // for each of this inner function has a separate let i
    }, i*1000);
}
