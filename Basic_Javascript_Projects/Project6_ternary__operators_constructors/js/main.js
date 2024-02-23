/* function Fart(decibels,smell,date,farter) {
    this.fart_decibels = decibels;
    this.fart_smell = smell;
    this.fart_date = date;
    this.fart_farter = farter;
}

var Joe = new Fart('.2','8/10','01/01/1998','Joe B');
var Clarissa = new Fart('.9','3/10','4/15/2009','Clarissa D.');

var fart_index = [];
fart_index.push(Joe);
fart_index.push(Clarissa);

function myFunc(){
    document.getElementById('keywords_constructors').innerHTML = JSON.stringify(fart_index);
}

// var typeof = 3323; //assigned reserved keyword to var */

function counter(){
    document.getElementById('counting').innerHTML = Count();
    function Count(){
        var startingPoint = 9;
        function Plus_one(){ startingPoint += 1; }
        Plus_one();
        return startingPoint;
    }
}