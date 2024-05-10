function getComputerChoice() {
    let randomNum = Math.random()
    if (randomNum >= 0 && randomNum <= .33) {
        return "Rock";
    } else if (randomNum > .33 && randomNum <= .66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanInput = window.prompt("Enter your choice: ")
    return humanInput;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice()

    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        console.log("You lose! Paper beats rock.")
        computerScore++;
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You win! Rock beats scissors.")
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You win! Scissors beats paper.")
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You lose! Rock beats scissors.")
        computerScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You win! Paper beats rock.")
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You lose! Scissors beats paper.")
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It was a tie! Go again.")
    } else {
        console.log("Bad input. Go again.")
    }

    console.log(humanChoice);
    console.log(computerChoice);
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (i = 0; i < 5; i++)
        playRound();
    
    if (humanScore > computerScore) {
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
        console.log("You win the game!")
    } else if (humanScore < computerScore) {
        console.log("You lose the game!")
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    } else {
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
        console.log("The game ended in a tie!")
    }
}

playGame();



