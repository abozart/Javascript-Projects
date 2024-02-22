var uObject = {
    type:'star',
    type: 7.5, //lightyears across
    state:'black hole',
    age:5.3, //billions of years
    sound:'WHOOOOSH!'
}

function dict(){

    delete uObject.sound; //delete object property
    document.getElementById('dictionary').innerHTML = JSON.stringify(uObject); //stringify obj via JSON
}

document.write(typeof "fhasgj");
document.write('<br>');
document.write(typeof -324.55);
document.write('<br>');
document.write(typeof uObject);
document.write('<br>');

