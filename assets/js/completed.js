/*--I've created four variables. These variables will be used to help us display a user's score on the completed.html page,
they'll also allow us to enable our saveScore button when a name is typed into the Enter Name field, since it's default setting
is set to disabled. This has been disabled so that users cannot save a score without entering a name first. The final variable
here pulls data from our localStorage. A user's score is saved into local storage so that we can display it on our completed.html
page--*/

const name = document.getElementById("name");
const saveScore = document.getElementById("saveScore");
const endScore = document.getElementById("endScore");
const newScore = localStorage.getItem("newScore");

/*--The code below allows us to take the score we accumulated over the course of the quiz and display it on the completed.html
page with a little added text for a more user friendly experience--*/

endScore.innerText = "You Scored:" + " " + newScore + "!";
