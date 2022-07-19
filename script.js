function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    switch (randomNumber){
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("Scissor");
            break;
    }
}

function singleRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return ("It's a Tie!");
    }
    else if(playerSelection === "Rock" && computerSelection ==="Paper"){
        return ("You Lose! Paper beats Rock");
    }
    else if(playerSelection === "Paper" && computerSelection ==="Scissor"){
        return ("You Lose! Scissor beats Paper");
    }
    else if(playerSelection === "Scissor" && computerSelection ==="Rock"){
        return ("You Lose! Rock beats Scissor");
    }
    else{
        return (`You won!  ${playerSelection} beats ${computerSelection}`);
    }

}

function playerSelection(){
    const str1 = prompt("Enter your choice:","Rock");
    const str = str1.charAt(0).toUpperCase() + str1.slice(1).toLowerCase();
    return str;

}
console.log(singleRound(playerSelection(),getComputerChoice()));
