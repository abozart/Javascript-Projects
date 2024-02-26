var global_var = 5;

function myFunc(){
    var local_var = 10;
    console.log(global_var + local_var) // add global_var and local_var
}

myFunc();

console.log(local_var) // inaccessible because its in a function