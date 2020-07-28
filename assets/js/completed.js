/*--I've created a handful of variables. These variables will be used to help us display a user's score on the completed.html page,
they'll also allow us to enable our saveScore button when a name is typed into the Enter Name field, since it's default setting
is set to disabled. This has been disabled so that users cannot save a score without entering a name first. The next variable
here pulls data from our localStorage. A user's score is saved into local storage so that we can display it on our completed.html
page. The totalResults variable will ultimately only allow 10 results to be displayed on our leaderboard--*/

const name = document.getElementById("name");
const saveScore = document.getElementById("saveScore");
const endScore = document.getElementById("endScore");
const newScore = localStorage.getItem("newScore");
const totalResults = 10;

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