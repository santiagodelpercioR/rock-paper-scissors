function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    console.log(choice)
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Hubo un error en la opcion de la IA")
    }
}

function getHumanChoice(){
    let opcion = prompt("ingresa tu eleccion")
}

function playRound(humanChoice, computerChoice){
    
}



let humanScore = 0;
let computerScore = 0;


console.log(getComputerChoice())
getHumanChoice()
