var i = 1;
var intervalId = setInterval(function(){
    console.log(i);
    i = i + 1;
    if(i >10 ){
        clearInterval(intervalId);
    }
}, 1000);