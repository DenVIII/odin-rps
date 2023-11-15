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

function game() {
    const wins = [];
    const gameResult;  

    for (i = 1; i <= 5; i++) {
        const playerChoice = getComputerChoice(); // Для рандома
        const computerChoice = getComputerChoice();
        wins.push(playRound(playerChoice, computerChoice));
    }

    gameResult = wins.reduce((acc, item) => {
        return acc[item] ? ++acc[item] : acc[item] = 1, acc
    }, {});

    
}

game();
