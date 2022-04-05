const choices = ["rock", "paper", "scissors"] //global variable: choices, which is an array that contains 3 strings rock, paper, and scissors
const winners = []; //global variable: winners, which is an empty array
function game () { //runs the playRound function on a loop, then after it changes the Start Game text of the button to Play new game, then logs the wins in the console
    for (let i=1; i<=5; i++){ //5 iteration for loop
      playRound(i);  //passing i as an argument into playRound // tells it to run 5 rounds
    }
    document.querySelector('button').textContent = "Play new game"; //at the end of 5 games, button changes text from Start Game to Play new game
    logWins(); //finishes game function by calling logWins()
}
function playRound (round) { //function that stores results of playerChoice(), computerChoice(), checkWinner(), pushes winner into winners[], displays round results via logRound()
    const playerSelection = playerChoice(); //stores result of playerChoice in variable: playerSelection
    const computerSelection = computerChoice(); //stores result of computerChoice() in variable: computerSelection
    const winner = checkWinner(playerSelection, computerSelection) //stores logical winner of round via checkWinner() and stores it into variable: winner
    winners.push(winner); //pushes the winner into the winners array
    logRound(playerSelection, computerSelection, winner, round) //displays the results of each round
}
function playerChoice (){ //function that accepts rock, paper, or scissors as valid inputs only (case insensitive) from the player/user
    let input = prompt ('Type rock, paper or scissors'); // asks user for input, sets what they type into input variable
    while (input == null){ //if player hits cancel, asks for input again
        input = prompt ("Type rock, paper, or scissors");
    }
    input = input.toLowerCase(); //sets any valid input they type like RoCK to rock, etc
    let check = validateInput(input); //runs input as a parameter into validateInput, stores it in variable: check is a boolean (true or falase)
    while (check == false){ //if they misspell rock, paper, or scissors
        input = prompt( 
            'Type Rock, Paper, or Scissors. Spelling needs to be exact. Case doesn\'t matter'
        );
        while (input == null){ //if player types nothing for input and just hits enter
            input = prompt ("Type rock, paper, or scissors");
        }
    input = input.toLowerCase(); //sets input string to be all lowercase
    check = validateInput(input); //runs input as a parameter into validateInput, stores it in check
    }
    return input; //return the string rock, paper, or scissors. Won't return until it accepts a rock, paper, or scissors input
}   
function computerChoice () { //function to have computer randomly select rock/paper/scissors
    return choices[Math.floor(Math.random()*choices.length)]; //returns rock/paper/or scissors by rounding down to each string, randomly selecting one from the length of the array
}
function validateInput(choice){ //validates that the user enters an input
    return choices.includes(choice); //checks that the input is either rock, paper, or scissors
    }
function checkWinner(choicePlayer, choiceComputer){ //this function determines the winner of each round, contains basic logic of real rock, paper, scissors 
    if (choicePlayer === choiceComputer){ //tie game if player and computer have same choice
        return 'Ties';
    } else if (  //when the player wins
        (choicePlayer === "rock" && choiceComputer =="scissors") || 
        (choicePlayer === "paper" && choiceComputer =="rock") || 
        (choicePlayer === "scissors" && choiceComputer =="paper")
        ){
        return 'Player';
    } else { //in all other cases, computer wins
        return 'Computer';
    }
}
function logWins () { //function to log the wins of a set of games
    let playerWins = winners.filter((item) => item == "Player").length; //stores the winner in an array called playerWins if item == player, increments +1
    let computerWins = winners.filter((item)=> item == "Computer").length; //item can be named anything within this array, it is an array element
    let ties = winners.filter((item) => item == "Ties" ).length; //filter checks each item, the arrow function adds the new item if it is equal to ""Ties" in this case, and keeps expanding and incrementing accordingly
    console.log("Results:"); //a sort of text placeholder for organization/readability, will display results below this line
    console.log('Player Wins: ', playerWins);  //displays the amount of rounds Player won
    console.log('Computer Wins: ', computerWins); //displays the amount of rounds Computer won
    console.log("Ties:", ties); //displays the amount of round Ties won
}
function logRound (playerChoice, computerChoice, winner, round){ //displays round results in the console
console.log('Round:', round);
console.log('Player chose: ', playerChoice);
console.log('Computer chose:', computerChoice);
console.log(winner, 'Won the round');
console.log('---------------------') // text placeholder for organization/readability, to separate the rounds in the console
}




