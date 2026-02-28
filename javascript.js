const quizcontainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("questions");
const optionscontainer = document.getElementById("options-container");
const submitBtn=document.getElementById("submitBtn");
const feedbackelement=document.getElementById("feedback");
const scoreElement=document.getElementById("score");

let currentquestionIndex = 0;
let score = 0;

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

]


function loadquestions(){
    const currentquestion = quizquestions[currentquestionIndex];
    questionElement.textContent = currentquestion.question;
    optionscontainer.innerHTML="";

    currentquestion.options.forEach((option,index)=>{
        const optionButton=document.createElement("button");
        optionButton.textContent=option;
        optionButton.onclick=function(){
            
        }
    })
}