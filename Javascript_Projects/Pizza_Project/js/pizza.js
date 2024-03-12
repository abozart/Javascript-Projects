/* RUNNING TOTAL DOES NOT TAKE THE COST OF TOPPINGS INTO ACCOUNT */

function getReceipt(){
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');

    for (var i = 0; i < sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+'<br>';
        }
    }

    /* Pizza Prices */
    if(selectedSize === 'Personal Pizza'){ sizeTotal = 12; }
    else if(selectedSize === 'Small Pizza'){ sizeTotal = 14; }
    else if(selectedSize === 'Medium Pizza'){ sizeTotal = 18; }
    else if(selectedSize === 'Large Pizza'){ sizeTotal = 22; }
    else if(selectedSize === 'Extra Large Pizza'){ sizeTotal = 26; }

    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these cars will get passed on to each function
    getTopping(runningTotal,text1);
}

function getTopping(runningTotal,text1){
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName('toppings');
    
    for(var j = 0; j < toppingArray.length; j++){
        console.log('selected topping item: ('+toppingArray[j].value+')');
        text1 = text1+toppingArray[j].value+"<br>";
    };

    var toppingCount = selectedTopping.length;
    if(toppingCount >1 ){
        toppingTotal = ( toppingCount -1 );
    }else{
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingCount);
    console.log('total selected topping items: '+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = $"+toppingTotal+".00");
    console.log('purchase total: $'+runningTotal+'.00');
    
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = "<h3>Total: <strong>$"+runningTotal+'.00</strong></h3>';
}