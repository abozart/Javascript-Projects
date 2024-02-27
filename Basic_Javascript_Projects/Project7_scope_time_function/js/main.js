// SCOPE CHALLENGE

var global_var = 5;

function myFunc(){
    var local_var = 10;
    console.log(global_var + local_var) // add global_var and local_var
}

myFunc();

console.log(local_var) // inaccessible because its in a function

// IF STATEMENT
if (4 != 10){
    console.log('numbers are not equal')
}
// END IF STATEMENT

// DATE
function getHours(){
    var currentHour = new Date().getHours(); //GET CURRENT HOUR
    if(currentHour < 12 == currentHour > 0){
        var msg = "It's breakfast time!";
    }else if (currentHour >= 12 == currentHour < 18){
        var msg = "It's tea time! "
    }else{
        var msg = "It's dinner time."
    }
    document.getElementById('output').innerHTML = msg+'<br>Time = '+currentHour;
}
// END DATE