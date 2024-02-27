
//  STRING METHODS
//      .concat(str2, str3, str4...)
//      .slice(0,-3) #remove first and last 3 chars
//      .toUpperCase()
/*

function full_sentence(){
    var part1 = 'I may have ';
    var part2 = 'made this ';
    var part3 = 'into a complete ';
    var part4 = 'sentence.';
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById('output').innerHTML = whole_sentence;
}

function slice_text(){
    var sentence = 'All work and no play makes Jack a psychopath!!!';
    var sliced_section = sentence.slice(3,-3); 
    document.getElementById('output').innerHTML = sliced_section;
    console.log(sliced_section.toUpperCase()) // UPPPPPPPERCASE
}

var textStr = "A man wearing a banana hammock does not lay in a hammock at all.";
var searchFor = 'hamm';
var searchStr = textStr.search(searchFor);

if(searchStr > -1){
    console.log('keyword "'+searchFor+'" found at position: '+searchStr)
}else{
    console.log('keyword "'+searchFor+'" NOT FOUND in string: \n'+textStr)
}

*/

//  NUMBER METHODS
//      .concat(str2, str3, str4...)
//      .slice(0,-3) #remove first and last 3 chars
//      .toUpperCase()

function numToStr(){
    var X = 182;
    console.log(typeof(X))
    console.log(X)
    var Y = X.toString()
    console.log(typeof(Y))
    console.log(Y)
}