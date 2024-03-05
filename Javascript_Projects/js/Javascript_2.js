function color_func(){
    var colorOutput;
    var color = document.getElementById('color_input').value;
    console.log(color)
    var colorString = ' is a great color!';
    switch(color.toLowerCase()){
        case 'red':
            color_output = 'red' + colorString;
        break;
        case 'yellow':
            color_output = 'yellow' + colorString;
        break;
        case 'green':
            color_output = 'green' + colorString;
        break;
        case 'blue':
            color_output = 'blue' + colorString;
        break;
        case 'purple':
            color_output = 'purple' + colorString;
        break;
        case 'pink':
            color_output = 'pink' + colorString;
        break;
        default:
            color_output = color+ ' is not on a color on the list.'
    }

    x = document.getElementById('switch_output');
    x.style.color = color;
    x.style.fontWeight = "bold";
    document.getElementById('switch_output').innerHTML = color_output;
}

window.onload = function(){
    const img_canvas = document.getElementById('scream-canvas');
    const ctx = img_canvas.getContext('2d');
    const img = document.getElementById('scream-img');
    ctx.drawImage(img,10,10);

    const gradient_canvas = document.getElementById('gradient');
    const ctx2 = gradient_canvas.getContext("2d");
    const grd = ctx2.createLinearGradient(20,0,250,0);
    grd.addColorStop(0,'black');
    grd.addColorStop(1,'red');

    ctx2.fillStyle = grd;
    ctx2.fillRect(20,20,260,110);
}

function checkForm(){
    var inputs = document.getElementsByClassName('contact');
    var msgArr = [];
    for (var i = 0; i <inputs.length; i++ ) {
        if(inputs[i].value == '') msgArr.push(inputs[i].placeholder); 
        if(inputs[i].type == 'tel' && inputs[i].value != '') { //validate tel field / check if empty
            if(checkStrDigit(inputs[i].value) === false || inputs[i].value.length != 10) msgArr.push('Valid Phone #'); //check if value is all numbers and is 10 digits long
        }
        if(inputs[i].type == 'email' && inputs[i].value != '') { //validate email field  / check if empty
            if(checkStrEmail(inputs[i].value) === null) msgArr.push('Valid Email');  //check if field is null, if so add error msg
        }
    }
    if(msgArr.length > 0){ //if errors are more than 0
        var missing_fields = msgArr.join(', ');
        document.getElementById('errors').innerHTML = "Error(s) ["+msgArr.length+"]<br><br>Please fill in the following fields: "+missing_fields; //output error msgs
        return false;
    }else{
        alert('no errors, your form was submitted!  ')
    }

}

function checkStrDigit(str) {
    return /^\d+$/.test(str);
}
function checkStrEmail(str){
    return str.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}   