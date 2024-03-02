//.length property
var myStr = 'supercalifragilistic expialadocius';
document.getElementById('output').innerHTML = "String = "+myStr+"<br>string length: "+myStr.length;

// loop example
var instruments = ['Guitar','Piano','Woodwinds','Drums','Brass','Horns'];
var content = '';
var Y;
function for_loop(){
    for(Y = 0; Y < instruments.length; Y++){
        content += instruments[Y]+'<br>';
    }
    document.getElementById('instrument_list').innerHTML = content;
}

// array example
function array_func(){
    var myArray = ['doh','re','me','fa','so','la','ti','doh'];
    document.getElementById('array').innerHTML = random_item(myArray);
}

//constant example
function constant_func(){
    //const dude = "Hey Dude!";
    // dude = 'asfgasg'; //display error

    const dudeObj = {where:'ismycar',a:'wooooah',b:'YO'}
    //.log(dudeObj);
    dudeObj.b = 'YO YO';
    dudeObj.c = 1242;
    //console.log(dudeObj)

    document.getElementById('constant').innerHTML = JSON.stringify(dudeObj);
}

//let example of block scope
function let_func(){
    var X = 325;
    console.log(X)
    if(1==1){
        let X = 75;
        console.log(X)
    }
    console.log(X);
}

// return statement
function random_item(items) {
    // Use Math.random() to generate a random number between 0 and 1,
    // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
    return items[Math.floor(Math.random() * items.length)];
}

//object assignment
function object_method(){
    let product = {
        color: 'red',
        size: 'bigger than a UAP, smaller than a submarine',
        weight: 200, //lbs
        unitCost: 1.74999, //$USD per lb
        totalCost: function(){
            return this.unitCost * this.weight
        }
    };
    document.getElementById('object_method').innerHTML = product.totalCost();
}


function break_func(){
    var text = new String;
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
      }
      console.log(text);
      document.getElementById('break_continue').innerHTML = text;
      
}
function continue_func(){
    var text = new String;
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
      }
      console.log(text);
      document.getElementById('break_continue').innerHTML = text;
}
