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

    for (i = 1; i <= 5; i++) {
        const playerChoice = prompt('Type rock, paper or scissors');
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);
        wins.push(roundResult);
    }

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

console.log(game());
