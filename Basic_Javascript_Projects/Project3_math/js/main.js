function add(){
    var num1 = 39;
    var num2 = 324;
    var exp = num1 + num2;
    document.getElementById('math').innerHTML = num1+" + "+num2+" = "+ exp;
}

function subtract(){
    var num1 = 324;
    var num2 = 39;
    var exp = num1 - num2;
    document.getElementById('math2').innerHTML = num1+" - "+num2+" = "+ exp; 
}

function multiply(){
    var num1 = 324;
    var num2 = 39;
    var exp = num1 * num2;
    document.getElementById('math3').innerHTML = num1+" x "+num2+" = "+ exp; 
}

function divide(){
    console.log('DIVIDE')
    var num1 = 324;
    var num2 = 39;
    var exp = num1 / num2;
    document.getElementById('math4').innerHTML = num1+" / "+num2+" = "+ exp; 
}

function allops(){
    console.log('ALL')
    var num1 = 324;
    var num2 = 39;
    var exp = num1 * num2 + 99 - 384;
    document.getElementById('math5').innerHTML = num1+" * "+num2+"  + 99 - 384 = "+ exp 
}

var remainder = 66 % 4
var math = 64 / 4;
document.write('<br><br>');
document.write('66 / 4 = '+math+' & remainder = '+remainder);

var num3 = 46;
var neg = -num3;
document.write('<br><br>');
document.write(num3 + ' negated: '+neg);

