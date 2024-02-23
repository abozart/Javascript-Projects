function checkAge(){
    console.log('wafawffawfwa')
    var height, can_ride;
    height = document.getElementById('height').value;
    can_ride = (height < 18) ? 'No you can\'t!!!':'Yes you can!';
    document.getElementById('canI').innerHTML = can_ride;
}


  function clear2() {
    alert('clear2');
  }