let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

function checkGuess() {
  if (gameOver) return;

  const guess = parseInt(document.getElementById("userGuess").value);
  const feedback = document.getElementById("feedback");
  const attemptsDisplay = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "❗ Please enter a number between 1 and 100.";
    feedback.style.color = "#d9534f";
    return;
  }

  attempts++;

  if (guess < secretNumber) {
    feedback.textContent = "🔽 Too low! Try a higher number.";
    feedback.style.color = "#ff9800";
  } else if (guess > secretNumber) {
    feedback.textContent = "🔼 Too high! Try a lower number.";
    feedback.style.color = "#ff9800";
  } else {
    feedback.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    feedback.style.color = "#4caf50";
    gameOver = true;
    document.getElementById("restartBtn").style.display = "inline-block";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  document.getElementById("userGuess").value = "";
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;
  document.getElementById("userGuess").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("restartBtn").style.display = "none";
}
