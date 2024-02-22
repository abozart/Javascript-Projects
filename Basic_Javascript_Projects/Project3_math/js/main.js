//ADD
function add(){
    var num1 = 39;
    var num2 = 324;
    var exp = num1 + num2;
    document.getElementById('math').innerHTML = num1+" + "+num2+" = "+ exp;
}

//SUBTRACT
function subtract(){
    var num1 = 324;
    var num2 = 39;
    var exp = num1 - num2;
    document.getElementById('math2').innerHTML = num1+" - "+num2+" = "+ exp; 
}

//MULTIPLY
function multiply(){
    var num1 = 324;
    var num2 = 39;
    var exp = num1 * num2;
    document.getElementById('math3').innerHTML = num1+" x "+num2+" = "+ exp; 
}

//DIVIDE
function divide(){
    console.log('DIVIDE')
    var num1 = 324;
    var num2 = 39;
    var exp = num1 / num2;
    document.getElementById('math4').innerHTML = num1+" / "+num2+" = "+ exp; 
}

//ALL OPERATION
function allops(){
    console.log('ALL')
    var num1 = 324;
    var num2 = 39;
    var exp = num1 * num2 + 99 - 384;
    document.getElementById('math5').innerHTML = num1+" * "+num2+"  + 99 - 384 = "+ exp 
}

function random(){
    return Math.round(Math.random()*100);
}
//REMAINDER
var remainder = 66 % 4
var math = 64 / 4;
document.write('<br><br>');
document.write('66 / 4 = '+math+' & remainder = '+remainder);

//NEGATED
var num3 = 46;
var neg = -num3;
document.write('<br><br>');
document.write(num3 + ' negated: '+neg);

//INCREMENT & DECREMENT
var X = 5;
X++;
document.write('<br><br>');
document.write('X(5) incremented: '+X);
var Y = 5;
Y--;
document.write('<br><br>');
document.write('Y(5) decremented: '+Y);

document.write('<br><br>');
document.write('Random # * 100: '+(Math.random()*100));
document.write('<br>Random #: '+Math.random());
document.write('<br><br>random() function (between 1-100)<br>');
document.write(random());




