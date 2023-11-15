function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'Player Wins!';
    } else {
        return 'Computer Wins!';
    }
}

const playerChoice = 'rOcK';
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));
