const correctMessages = ["Rätt","Bra gjort"];
const wrongMessages =["Fel", "Försök igen", "Nästan"];
const options =  document.querySelectorAll('.option')
const result = document.getElementById('result')

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