function dict(){
    var uObject = {
        type:'star',
        type: 7.5, //lightyears across
        state:'black hole',
        age:5.3, //billions of years
        sound:'WHOOOOSH!'
    }
    delete uObject.sound; //delete object property
    document.getElementById('dictionary').innerHTML = JSON.stringify(uObject); //stringify obj via JSON
}


