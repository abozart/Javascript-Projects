function displayMood(moodObj){
    var mood = moodObj.getAttribute('data-mood');
    alert(mood);
}

myAlert = (domObj) => alert('shawday '+domObj.getAttribute('data-mydata'));
