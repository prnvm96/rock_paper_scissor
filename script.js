let win = 0;
let loss = 0;
let tie = 0;

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
        tie += 1;
        return ("It's a Tie!");
    }
    else if(playerSelection === "rock" && computerSelection ==="paper"){
        loss += 1;
        return ("You Lose! Paper beats Rock");
    }
    else if(playerSelection === "paper" && computerSelection ==="scissor"){
        loss += 1;
        return ("You Lose! Scissor beats Paper");
    }
    else if(playerSelection === "scissor" && computerSelection ==="rock"){
        loss += 1;
        return ("You Lose! Rock beats Scissor");
    }
    else{
        win +=1;
        return (`You won!  ${playerSelection} beats ${computerSelection}`);
    }

}

// function playerSelection(){
//     const str1 = prompt("Enter your choice:","Rock");
//     const str = str1.charAt(0).toUpperCase() + str1.slice(1).toLowerCase();
//     return str;

// }


function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice:'Rock','Paper' or 'Scissor'","Rock").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(singleRound(playerSelection, computerSelection));
    }
    if (win === loss){
        console.log("It's a Tie");
    }
    else if(win > loss){
        console.log("You win");
    }
    else{
        console.log("You Loss");
    }
    console.log(`Result Your Score = ${win} Computer Score = ${loss} Tie = ${tie}`);
}
game();