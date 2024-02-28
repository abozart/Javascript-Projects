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
    console.log(slides)
    console.log(slideIndex-1)
    console.log(dots)

    slides[slideIndex-1].style.display = 'block'; //show particlar slide
    dots[slideIndex-1].className += ' active';
}