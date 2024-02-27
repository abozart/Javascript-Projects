
//  STRING METHODS
//      .concat(str2, str3, str4...)
//      .slice(0,-3) #remove first and last 3 chars
//      .toUpperCase()
//      .toLowerCase()


function full_sentence(){
    var part1 = 'I may have ';
    var part2 = 'made this ';
    var part3 = 'into a complete ';
    var part4 = 'sentence.';
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById('concat').innerHTML = whole_sentence;
}

function slice_text(){
    var sentence = 'All work and no play makes Jack a psychopath!!!';
    var sliced_section = sentence.slice(3,-3); 
    document.getElementById('slice').innerHTML = sliced_section.toUpperCase() + "<br>Original: "+sentence;
}

var textStr = "A man wearing a banana hammock does not lay in a hammock at all.";
var searchFor = 'hamm';
var searchStr = textStr.search(searchFor);

if(searchStr > -1){
    console.log('keyword "'+searchFor+'" found at position: '+searchStr)
}else{
    console.log('keyword "'+searchFor+'" NOT FOUND in string: \n'+textStr)
}



//  NUMBER METHODS
//      .toString()         #convert datatype from number into string
//      .slice(0,-3)        #remove first and last 3 chars
//      .toPrecision(n)     #trim number to first n digits
//      .toFixed(n)         #trim decimal to n digits and round up/down
//      .valueOf()          #???? Returns the primitive value ????

function numToStr(){
    var X = 182;
    console.log(typeof(X))
    console.log(X)
    var Y = X.toString()
    document.getElementById('toString').innerHTML = Y+"<br>typeof() = "+typeof(Y);
}

function number_precision(){
    var X = 18252.219412757;
    document.getElementById('toPrecision').innerHTML = X.toPrecision(4) + "<br>Original: "+X;;
}

function number_fixed(){
    let X = 18252.219492757;
    document.getElementById('output').innerHTML = X.toFixed(4);

    console.log(typeof(3));
    console.log(typeof(3).valueOf());
    console.log(typeof new Number(3).valueOf()); //All return number
    console.log(Number(5).valueOf()); 
}