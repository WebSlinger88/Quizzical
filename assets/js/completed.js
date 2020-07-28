/*--I've created a handful of variables. These variables will be used to help us display a user's score on the completed.html page,
they'll also allow us to enable our saveScore button when a name is typed into the Enter Name field, since it's default setting
is set to disabled. This has been disabled so that users cannot save a score without entering a name first. The next variable
here pulls data from our localStorage. A user's score is saved into local storage so that we can display it on our completed.html
page. The totalResults variable will ultimately only allow 10 results to be displayed on our leaderboard--*/

/*--When we receive data from a web server the data is always a string, in this instance I don't want the data to be a string,
I want the data to be an object so that I can display the data in that object on the leaderboard page. If I didn't have anything
saved in local storage and I tried to run the application the console would flag as null. So the code below will try and pull
whatever is in local storage OR it will give us an empty array. At no point do I want the console to return as null--*/

const name = document.getElementById("name");
const saveScore = document.getElementById("saveScore");
const endScore = document.getElementById("endScore");
const newScore = localStorage.getItem("newScore");
const totalResults = 10;
const results = JSON.parse(localStorage.getItem("results")) || [];

/*--The code below allows us to take the score we accumulated over the course of the quiz and display it on the completed.html
page with a little added text for a more user friendly experience--*/

endScore.innerText = "You Scored:" + " " + newScore + "!";

/*--The code below says that we can only click the saveScore button when something has been written in the name field. If nothing
is typed into the name field then the saveScore button will remain disabled--*/

name.addEventListener("keyup", function() {
    saveScore.disabled = !name.value;
});

saveToBoard = function(e) {
    e.preventDefault();
}