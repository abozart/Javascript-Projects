const h1 = document.createElement('h1');
h1.innerHTML = "Hello World!";
document.body.appendChild(h1);

console.log(JSON.stringify($("html")[0].outerHTML)) //get stringified version of html


$('#dada').on('click', function(){ //when #dada is clicked hide h1
    $('h1').hide(1000)
});    
