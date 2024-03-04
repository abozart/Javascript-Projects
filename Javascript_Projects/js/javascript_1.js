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

console.log(document.getElementsByClassName('class1')[2].innerHTML);

window.onload = function(){
    const canvas = document.getElementById('scream-canvas');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('scream-img');
    ctx.drawImage(img,10,10);
}
