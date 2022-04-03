//Rock Paper Scissors
// Pseudocode to start:
// function computerPlay - returns Rock, Paper, or Scissors randomly
// function playRound (playerSelection, computerSelection) - returns "You lose! Paper beats rock." etc
// make function's playerSelection parameter case-insensitive 
// Write a function called game()
// Call the playRound function inside of this one to play a 5 round game that keeps score and reports 
// a winner or loser at the end. 
// for (let i=0; i < 5; i++) (5 rounds)
// then use console.log() to display results of each round and the winner at the end
// use prompt() to get input from the user

function computerPlay (){ //returns a random selection from myArray which consists of R, P, or S...
    let myArray = ["rock", "paper", "scissors"]; //stores strings rock, paper, scissors in myArray
    let computerSelection = myArray[Math.floor(Math.random()*myArray.length)]; //selects a random string inside of myArray and stores it in computerSelection
    return computerSelection;
}

function userPlay () {
let userChoice = window.prompt("Please type your selection of Rock, Paper, or Scissors: ");
    return userChoice.toLowerCase(); // converts input into all lowercase
}

function playRound(playerSelection, computerSelection){ //function to determine the winner of a round based on real rock/paper/scissors rules. Contains all possible outcomes
    if ((playerSelection == "rock") && (computerSelection == "rock")){
        return "Tie game!"
    } else if ((playerSelection == "rock") && (computerSelection == "paper")){
        return "You lose!"
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")){
        return "You win!"
    
    } else if ((playerSelection == "paper") && (computerSelection == "rock")){
        return "You win!"
    } else if ((playerSelection == "paper") && (computerSelection == "paper")){
        return "Tie game!"
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")){
        return "You lose!"

    }  else if ((playerSelection == "scissors") && (computerSelection == "rock")){
        return "You lose!"
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")){
        return "You win!"
    } else if ((playerSelection == "scissors") && (computerSelection == "scissors")){
        return "Tie game!"
    } 
}

const playerSelection = userPlay(); //stores result of userPlay() inside variable called playerSelection
const computerSelection = computerPlay(); //stores result of computerPlay() inside variable called computerSelection

let playerWins = 0;
let computerWins = 0;
let tieGames = 0;

function recordHolder() {
       let result = playRound(playerSelection, computerSelection);
        if (result == "You win!") {
            return playerWins++;
        } else if (result == "You lose!"){
            return computerWins++;
        } else if (result == "Tie game!"){
            return tieGames++;
        } 
    }

function game() {
    for (let i=0; i<4; i++){ //loop game 5 times
        userPlay(); //ask the user for rock/paper/scissors
        computerPlay(); //randomly generate computer's choices of rock/paper/scissors
    }
}



console.log(playerSelection); 
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(recordHolder());
console.log('Player wins: ', playerWins);
console.log('Computer wins: ', computerWins);
console.log('Tie games: ', tieGames);
console.log(game());



