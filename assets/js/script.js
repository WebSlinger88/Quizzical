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
/*--The wrongPoints variable is how many points will be deducted for a wrong answer--*/ 
/*--The totalQuests variable set the limit for how many questions a user will be given--*/ 

const correctPoints = 10;
const wrongPoints = 5;
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