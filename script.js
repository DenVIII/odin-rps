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
}

function game() {
    const wins = [];

    console.log(roundResult);
    wins.push(roundResult);

    const gameResult = wins.reduce((acc, item) => {
        return acc[item] ? ++acc[item] : acc[item] = 1, acc
    }, {});

    console.log(gameResult)
    if (gameResult['Player Wins!'] === gameResult['Computer Wins!']) {
        return "It's a Tie!";
    } else if (gameResult['Player Wins!'] > gameResult['Computer Wins!'] || gameResult['Computer Wins!'] === undefined) {
        return 'Player Won the game!';
    } else {
        return 'Computer Won the game!';
    }
}

const btns = document.querySelectorAll('button');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

btns.forEach(btn => btn.addEventListener('click', playRound))

console.log(game());
