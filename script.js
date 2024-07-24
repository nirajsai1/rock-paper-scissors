// script.js
document.addEventListener("DOMContentLoaded", () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const buttons = document.querySelectorAll(".choice");
    const playerChoiceElement = document.getElementById("player-choice");
    const computerChoiceElement = document.getElementById("computer-choice");
    const resultElement = document.getElementById("game-result");
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");

    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.textContent;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            playerChoiceElement.textContent = `Player chose: ${playerChoice}`;
            computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;
            const result = determineWinner(playerChoice, computerChoice);
            resultElement.textContent = result;
            updateScores(result);
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a draw!";
        }
        if (
            (player === "Rock" && computer === "Scissors") ||
            (player === "Paper" && computer === "Rock") ||
            (player === "Scissors" && computer === "Paper")
        ) {
            return "You win!";
        }
        return "You lose!";
    }

    function updateScores(result) {
        if (result === "You win!") {
            playerScore++;
            playerScoreElement.textContent = playerScore;
        } else if (result === "You lose!") {
            computerScore++;
            computerScoreElement.textContent = computerScore;
        }
    }
});
