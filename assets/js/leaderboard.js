/*--Two variables added for our leaderboard page. lbList is our variable that shall call our id within the leaderboard.html
file. This will ultimately define the list of names and scores. The leaderboard variable is fetching data from local storage
and converting it from a string to an object using JSON.parse as we have done previously in this project. ((See completed.js
comments for information about this))--*/

const lbList = document.getElementById("lb-list");
const leaderboard = JSON.parse(localStorage.getItem("results")) || [];
