function dict(){
    var animal = {
        species:'dog',
        color:'black',
        breed:'lab',
        age:5,
        sound:'BARK!'
    }
    var uObject = {
        type:'star',
        type: 7.5, //lightyears across
        state:'black hole',
        age:5.3, //billions of years
        sound:'WHOOOOSH!'
    }
    delete uObject.sound;
    document.getElementById('dictionary').innerHTML = JSON.stringify(uObject);
}


