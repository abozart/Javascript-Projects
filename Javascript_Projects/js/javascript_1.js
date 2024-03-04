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
