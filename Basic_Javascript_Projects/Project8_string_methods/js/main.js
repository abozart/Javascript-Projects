
function full_sentence(){
    var part1 = 'I may have ';
    var part2 = 'made this ';
    var part3 = 'into a complete ';
    var part4 = 'sentence.';
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById('output').innerHTML = whole_sentence;
}