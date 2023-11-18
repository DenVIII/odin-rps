function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function playRound() {
    const playerSelection = this.textContent.toLowerCase();
    const computerSelection = getComputerChoice();

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (playerSelection !== computerSelection) {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    if (winner.textContent != '') {
        winner.textContent = '';
    }
}

function game() {
    const playerWins = parseInt(playerScore.textContent);
    const computerWins = parseInt(computerScore.textContent);

    if (playerWins < 5 && computerWins < 5) {
        return;
    }

    if (playerWins > computerWins) {
        winner.textContent = 'Player';
    } else {
        winner.textContent = 'Computer';
    }

    resetGame();
}

function resetGame() {
    playerScore.textContent = '0';
    computerScore.textContent = '0';
}

const btns = document.querySelectorAll('button');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const winner = document.querySelector('.winner');

btns.forEach(btn => btn.addEventListener('click', playRound));
btns.forEach(btn => btn.addEventListener('click', game));
