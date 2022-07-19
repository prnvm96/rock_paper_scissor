function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    switch (randomNumber){
        case 1:
            return("rock");
            break;
        case 2:
            return("paper");
            break;
        case 3:
            return("scissor");
            break;
    }
}
function singleRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return ("It's a Tie!");
    }
    else if(playerSelection === "rock" && computerSelection ==="paper"){
        return ("You Lose! Paper beats Rock");
    }
    else if(playerSelection === "paper" && computerSelection ==="scissor"){
        return ("You Lose! Scissor beats Paper");
    }
    else if(playerSelection === "scissor" && computerSelection ==="rock"){
        return ("You Lose! Rock beats Scissor");
    }
    else{
        return (`You won!  ${playerSelection} beats ${computerSelection}`);
    }

}

// function playerSelection(){
//     const str1 = prompt("Enter your choice:","Rock");
//     const str = str1.charAt(0).toUpperCase() + str1.slice(1).toLowerCase();
//     return str;

// }
const playerSelection = prompt("Enter your choice:'Rock','Paper' or 'Scissor'","Rock").toLowerCase();
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection));
