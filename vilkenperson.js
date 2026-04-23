const questions = [
     {
        image: "lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.avif",
        options: [
        { text: "悲しい女性<", correct: false },
            { text: "怒っている女性<", correct: false },
            { text:"幸せそうな女性", correct: true },
           { text: "眠そうな男", correct: false }
        ]
     },
{
  image: "premium_photo-1669021454145-49146869b916.avif", 
  options: [
     { text: "走っています", correct: true },
     { text: "歩いています", correct: false },
     { text: "食べています", correct: false },
     { text: "寝ています", correct: false }
  ]
},
{
 image: "0_DwjQsFalovqGqeCI.jpg",
 options: [
  { text: "食べています", correct: false },
  { text: "料理しています", correct: true },
  { text: "走っています", correct: false },
  { text: "勉強しています", correct: false } 
   ]
  },
];
let currentQuestionIndex = 0;

const correctMessages = ["Rätt","Bra gjort"];
const wrongMessages =["Fel", "Försök igen", "Nästan"];

const ImageElement = document.getElementById('game-img');
const optionsContainer = document.getElementById('options');
const resulttext = document.getElementById('result');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
 constcurrent
}

options.forEach(button => {
button.addEventListener('click', () => {
const isCorrect = button.dataset.correct === 'true';
options.forEach(btn => btn.style.backgroundColor = '');

if (isCorrect) {
const message = correctMessages[Math.floor(Math.random() * correctMessages.length)];
result.textContent = message;
result.style.color = 'green';
button.style.backgroundColor = 'lightgreen';
} else {
const message = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
 result.textContent = message;
 result.style.color = 'red';
 button.style.backgroundColor = 'red';
  }
 });
});