function ternary(){
    console.log('wafawffawfwa')
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var numTest = (num1 > num2) ? 'First # is larger!':'Second # is larger.';
    document.getElementById('numResult').innerHTML = numTest
}

function counter(){ //nested functions
    document.getElementById('counting').innerHTML = Count();
    function Count(){
        var startingPoint = 9;
        function Plus_one(){ startingPoint += 1; }
        Plus_one();
        return startingPoint;
    }
}

function Fart(decibels,smell,date,farter) {
    this.fart_decibels = decibels;
    this.fart_smell = smell;
    this.fart_date = date;
    this.fart_farter = farter;
}

var Joe = new Fart('.2','8/10','01/01/1998','Joe B'); // CREATE NEW INSTANCE
var Clarissa = new Fart('.9','3/10','4/15/2009','Clarissa D.');

var fart_index = []; //add Joe & Clarissa to single Array
fart_index.push(Joe);
fart_index.push(Clarissa);

function myObj(){
    document.getElementById('fahter_result').innerHTML = JSON.stringify(fart_index); //display Fart obj
}
