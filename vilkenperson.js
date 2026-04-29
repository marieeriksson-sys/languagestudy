const questions = [
     {
        image: "lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.avif",
        options: [
        { text: "悲しい女性", correct: false },
            { text: "怒っている女性", correct: false },
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
  { text: "料理をしています", correct: true },
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
const resultText = document.getElementById('result');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
 const currentQuestion = questions[currentQuestionIndex];

ImageElement.src = currentQuestion.image;
optionsContainer.innerHTML = '';
resultText.textContent = '';
nextButton.style.display = 'none';

currentQuestion.options.forEach(option => {
   const button = document.createElement('button');
   button.textContent = option.text;
   button.classList.add('option');

   button.addEventListener('click', () => {
   if (option.correct) {
   resultText.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];
   resultText.style.color = 'green';
   button.style.backgroundColor = 'lightgreen';

   setTimeout(() => {
     if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
     } else {
      resultText.textContent = "Spelet är slut, bra jobbat";
      nextButton.textContent = "Börja om";
      nextButton.style.display = 'block';
     }
   }, 1000);

} else {
   resultText.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
   resultText.style.color = 'red';
   button.style.backgroundColor = '#ffcccc';
  }
});
optionsContainer.appendChild(button);
  });
}


loadQuestion();
nextButton.addEventListener('click', () => {
   currentQuestionIndex = 0;
   loadQuestion();
})