function countdown(){
    var seconds = document.getElementById('seconds').value;

    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1){
            clearTimeout(time);
            timer.innerHTML = "BEEP BEEP!@#@$ WAKE UP DUDE!#@#";
        }
    
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if(n > slides.length) {slideIndex = 1 }
    if(n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active',''); //replace active class
    }

    slides[slideIndex-1].style.display = 'block'; //show particlar slide
    dots[slideIndex-1].className += ' active';
}


document.onkeydown = checkKey;
/* function checkKey(e) {

    switch(e.keyCode) {
        case 38:
            console.log('up')
            break;
        case 40:
            console.log('down')
            break;
        case 37:
            console.log('left')
            plusSlides(-1)
            break;
        case 39:
            console.log('right')
            plusSlides(1)
            break;
        default:
          // code block
          console.log('You pressed key: '+e.keyCode)
      } 

} */

function checkKey(e) {
    switch(e.keyCode) {
        case 37: //left arrow
            plusSlides(-1)
            break;
        case 39: //right arrow
            plusSlides(1)
            break;
      } 

}