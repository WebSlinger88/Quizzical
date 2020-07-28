/*--Two variables added for our leaderboard page. lbList is our variable that shall call our id within the leaderboard.html
file. This will ultimately define the list of names and scores. The leaderboard variable is fetching data from local storage
and converting it from a string to an object using JSON.parse as we have done previously in this project. ((See completed.js
comments for information about this))--*/

const lbList = document.getElementById("lb-list");
const leaderboard = JSON.parse(localStorage.getItem("results")) || [];

lbList.innerHTML = leaderboard 

/*--The function below uses the map method to iterate through each score and for each one of those scores we want to add an <li>
to our <ul> which is in leaderboard.html. As you can see below a list of names shall be created and a list of scores shall be 
created. Map is basically taking an incoming array which in this instance is score, and it converts each item within it into a
new array which is the string that is returned, as you can see below. Both name and score have their own classes defined and 
they'll be styled separately within style.css--*/

  .map(function(score){ 
    return `<li class="lb-name">${score.name}</li>` + `<li class="lb-score">${score.score}</li>`; 
  }) 
