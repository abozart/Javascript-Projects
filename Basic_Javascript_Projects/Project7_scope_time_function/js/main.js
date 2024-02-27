/* SCOPE CHALLENGE

var global_var = 5;

function myFunc(){
    var local_var = 10;
    console.log(global_var + local_var) // add global_var and local_var
}

myFunc();

console.log(local_var) // inaccessible because its in a function

END SCOPE CHALLENGE */

// IF STATEMENT
if (4 != 10){
    console.log('numbers are not equal')
}
// END IF STATEMENT

// DATE
function get_hours(hourCompare){
    var currentHour = new Date().getHours();
    if(currentHour < hourCompare){
        var msg = 'It\'s before '+hourCompare+'00.';
    }else{
        var msg = 'It\'s past '+hourCompare+'00'
    }
    document.getElementById('greeting').innerHTML = msg+' Time = '+currentHour+' : Compare time = '+hourCompare;
}
// END DATE