# rock-paper-scissors

A simple implementation of the classic Rock Paper Scissors game in JavaScript.

## How to Play

1. Open the file in a web browser or run it in a JavaScript environment.
2. When prompted, enter your choice (Rock, Paper, or Scissors) in the input field.
3. The computer will randomly select its choice.
4. The game will determine the winner based on the standard rules of Rock Paper Scissors.
5. The game will be played for 5 rounds, and the final score will be displayed.

## Game Rules

- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper
- If both players choose the same option, it's a tie.

## Code Structure

The code consists of the following functions:

- `getComputerChoice()`: Generates a random choice for the computer (Rock, Paper, or Scissors).
- `getHumanChoice()`: Prompts the user to enter their choice and returns the input.
- `playRound()`: Plays a single round of the game by getting the human and computer choices, determining the winner, and updating the scores.
- `playGame()`: Runs the game for 5 rounds, calling `playRound()` in a loop, and displays the final scores and the overall winner.

The game logic is implemented using conditional statements and string comparisons.
