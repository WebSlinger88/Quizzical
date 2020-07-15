/*VARIABLES*/

/*--I have created two variables which will pull information from the questions.html file via Id and Class name. 
They will reference the quiz questions and quiz answers. I want the answers to be an array so that we have four different options to choose from--*/ 

/*--I've chosen 'const' as my variable because it can't and won't be changed, unlike let and var where their contents can be changed--*/

const quizQ = document.getElementById("quiz-question");
const quizA = Array.from(document.getElementsByClassName("quiz-answer"));

/*--I have created another handful of variables which will each have a role to play--*/ 

/*--currentQ will be our current question which will be an object because it can potentially have many values--*/ 
/*--answerDelay will be in place so that there will be a slight delay before a user can chose another answer--*/ 
/*--The score variable will be the users score which will start at 0--*/ 
/*--qNum is a variable that will determine which question number the user is on--*/ 
/*--availableQ is an empty array which will be an available copy of our question set, we will take questions out 
of our availableQ array as the user uses them. The user will be presented with a unique question each time--*/ 

let currentQ = {};
let answerDelay = false;
let score = 0;
let qNum = 0;
let availableQ = [];

/*--The correctPoints variable is how many points will be awarded for a correct answer--*/ 
/*--The incorrectPoints variable is how many points will be deducted for a wrong answer--*/ 
/*--The totalQuests variable set the limit for how many questions a user will be given--*/ 

const correctPoints = 10;
const incorrectPoints = 5;
const totalQuests = 3;

/*--quizQuests is a variable which contains a handful of questions in the form of objects. 
Each object consists of one question and four possible answers. The object also contains the actual answer--*/ 

let quizQuests = [ 
    { 
        question: "What is the hottest object in our solar system?", 
        answer1: "Moon", 
        answer2: "Venus", 
        answer3: "Sun", 
        answer4: "Titan", 
        answer: 3 
    }, 

    { 
        question: "What year did the first human walk on the moon?", 
        answer1: "1969", 
        answer2: "1966", 
        answer3: "1971", 
        answer4: "1962", 
        answer: 1 
    }, 

    { 
        question: "Which planet has an ongoing storm named The Great Red Spot?", 
        answer1: "Saturn", 
        answer2: "Jupiter", 
        answer3: "Uranus", 
        answer4: "Mercury", 
        answer: 2 
    } 
]; 

/*GAME BEGIN FUNCTION*/

/*--This is the gameBegin function which is the function that’ll be used at the beginning of the game. 
We’ll start on qNum (question number) 0 and we’ll start with a score of 0. 
availableQ is our empty array which will copy our questions from our quizQuests array using the spread operator. 
The spread operator [...quizQuests] takes an array, spreads out each of its items and puts them into a new array (availableQ). 
Ultimately when availableQ runs out of items, the game will finish. Either that or when totalQuests reaches it’s limit, the game will end.--*/ 

/*--the nextQuest function will be called within the gameBegin function to initiate the next question within the game. 
Basically when we have started the game and chosen our first answer, we’ll move onto the next question--*/ 

gameBegin = function() { 
    score = 0; 
    qNum = 0; 
    availableQ = [...quizQuests]; 

    nextQuest(); 
}; 

/*NEXT QUESTION FUNCTION*/

/*--The function below basically says, if there are no more available questions in the availableQ array OR the totalQuests limit has been reached, 
a new page will be loaded. In this instance the completed.html page will be loaded and that will tell the user that they have completed the game--*/ 

/*--The game’s qNum will start at 0 but when we start playing the game qNum++ will increment the game’s question number to 1 and so on
until we reach our limit. The limit is set in the const variable totalQuests--*/

/*--In order to generate a random question we need to do a little math. Math.random() will generate a random decimal number between 0 and 1. 
If we want a higher number than that we need to multiply it by a number. If we wanted a random number between 0 and 10 then we would * the Math.random() by 10. 
In this instance we don’t necessarily want to multiply it by a number, we want to multiply it by the number of remaining items within our availableQ array. 
If we have 10 questions remaining in our availableQ array and we use one question, we have 9 remaining. Math.random() * availableQ.length will generate a random 
number depending on how many questions are remaining with the array. Adding Math.floor to the beginning of this statement will get rid of the decimal point and 
take the first number presented to us. For example, if we had the number 2.5893546 and we added Math.floor to our statement it would remove the decimal point and 
any numbers following it and leave us with the number 2. Whilst playing the game, our next question will be question number 2 within the availableQ array. 
To reference this I have placed this statement within a variable called qCatalogue--*/

/*--Our current question will be the available question that has been selected via our qCatalogue hence the currentQ = availableQ[qCatalogue] next we will take 
the quizQ’s (quiz question’s) HTML element, the innerText, and make it the currentQ (current question) --*/ 

/*--There’s a little function within the nextQuest function that will help us generate the answers for each question. Within the questions.html file I’ve placed 
a data-number within each question. Here we are referencing that data-number. This function is basically saying find the “answer” within the quizA variable and 
find it’s dataset-number and display the answers relating to the speficic currentQ (current question)--*/ 

/*--Finally we’re taking the availableQ array and we’re splicing out the question that we just used so that we don’t randomly generate the same question twice. 
answerDelay is set to true so that when the question has loaded we’re giving permission to the user to go ahead and answer--*/

nextQuest = function() { 
    if (availableQ.length === 0 || qNum >= totalQuests) { 
        return window.location.assign("/completed.html"); 
    } 

    qNum++; 
    const qCatalogue = Math.floor(Math.random() * availableQ.length); 
    currentQ = availableQ[qCatalogue]; 
    quizQ.innerText = currentQ.question;

    quizA.forEach( answer => { 
        const number = answer.dataset['number']; 
        answer.innerText = currentQ['answer' + number]; 
    });

        availableQ.splice(qCatalogue, 1); 
        answerDelay = true; 
};

/*--This little function will stop a user from being able to click an answer if the website isn’t ready for it. 
Also a new question will be generated when an answer is clicked on (nextQuest()). It can go either two ways, 
chosenAnswer is an e-target for incorrect answers and chosenCorrect is a correct answer. 
Once an answer has been chosen the nextQuest() function will engage--*/ 

quizA.forEach(answer =>[ 
    answer.addEventListener('click', e =>{ 
        if(!answerDelay) return;
        answerDelay = false; 

        const chosenAnswer = e.target; 
        const chosenCorrect = chosenAnswer.dataset["number"]; 

        nextQuest(); 
    }) 
]); 

/*--This is where we call the gameBegin function. It's at the bottom so that it gets called first before anything else--*/ 

gameBegin(); 