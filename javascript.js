const quizcontainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("questions");
const optionscontainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submitBtn");
const feedbackelement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

const retestBtn = document.getElementById("retestBtn");

let currentquestionIndex = 0;
let score = 0;
let selectedOption = null;

const quizquestions = [
    {
        question:"Which keyword is used to declare a variable in JavaScript?",
        options:["var", "let", "const", "All of the above"],
        correctAnswer:"All of the above"
    },
    {
        question: "Which method is used to print output in console?",
        options: ["print()", "console.log()", "echo()", "write()"],
        correctAnswer:"console.log()"
    },
    {
        question: "Which symbol is used for single line comment in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correctAnswer:"//"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Google", "Netscape", "Oracle"],
        correctAnswer:"Netscape"
    }
];


function loadquestions(){

    feedbackelement.textContent = "";

    const currentquestion = quizquestions[currentquestionIndex];
    questionElement.textContent = currentquestion.question;

    optionscontainer.innerHTML = "";

    currentquestion.options.forEach(option => {

        const optionButton = document.createElement("button");
        optionButton.textContent = option;

        optionButton.onclick = function(){

            selectedOption = option;

            const allButtons = optionscontainer.querySelectorAll("button");
            allButtons.forEach(btn => btn.style.backgroundColor = "");

            optionButton.style.backgroundColor = "orange";
        };

        optionscontainer.appendChild(optionButton);

    });
}


function submitAnswer(){

    if(selectedOption === null){

        feedbackelement.textContent = "Please select an answer!";
        return;

    }

    const correctAnswer = quizquestions[currentquestionIndex].correctAnswer;

    if(selectedOption === correctAnswer){

        feedbackelement.textContent = "Correct!";
        score++;

    }else{

        feedbackelement.textContent = "Wrong! Correct answer is: " + correctAnswer;

    }

    scoreElement.textContent = "Score: " + score;

    currentquestionIndex++;
    selectedOption = null;

    if(currentquestionIndex < quizquestions.length){

        setTimeout(loadquestions,1000);

    }
    else{

        setTimeout(()=>{

            questionElement.textContent = "Quiz Finished!";
            optionscontainer.innerHTML = "";
            submitBtn.style.display = "none";
            feedbackelement.textContent = "Final Score: " + score;

            retestBtn.style.display = "inline-block";

        },1000);

    }

}


function restartQuiz(){

    currentquestionIndex = 0;
    score = 0;
    selectedOption = null;

    scoreElement.textContent = "Score: 0";

    submitBtn.style.display = "inline-block";
    retestBtn.style.display = "none";

    loadquestions();

}


loadquestions();