const questions = [
    {
       image: "lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.avif",
       options: [
       { text: "A sad woman", correct: false },
           { text: "An anrgy woman", correct: false },
           { text:"A happy woman", correct: true },
          { text: "A sleepy man", correct: false }
       ]
    },
{
 image: "premium_photo-1669021454145-49146869b916.avif", 
 options: [
    { text: "A man running", correct: true },
    { text: "A man walking", correct: false },
    { text: "A woman eating", correct: false },
    { text: "A sleepy man", correct: false }
 ]
},
{
image: "0_DwjQsFalovqGqeCI.jpg",
options: [
 { text: "A person eating", correct: false },
 { text: "A person cooking", correct: true },
 { text: "I am running", correct: false },
 { text: "A man unpacking groceries", correct: false } 
  ]
 },
{
image:"pexels-photo-3771069.jpeg",
options: [
  { text: "A woman waking up", correct: false },
  { text:"A man sleeping", correct: true },
  { text: "I am sleeping", correct: false },
  { text: "A man making the bed", correct: false }
]
}
];
let currentQuestionIndex = 0;

const correctMessages = ["Rätt","Bra gjort"];
const wrongMessages =["Fel", "Försök igen", "Nästan"];

const ImageElement = document.getElementById('game-img');
const optionsContainer = document.getElementById('options');
const resultText = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
nextButton.classList.add('börjaom-btn');

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
  const allButtons = optionsContainer.querySelectorAll('.option');
  allButtons.forEach(btn => {
     btn.style.backgroundColor = '';
  });
  if (option.correct) {
  resultText.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];
  resultText.style.color = 'green';
  button.style.backgroundColor = 'lightgreen';
  allButtons.forEach(btn => btn.style.pointerEvents = 'none');

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