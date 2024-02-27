/*
    string methods
.concat
.slice(0,-3) #remove first and last 3 chars


*/

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
}