function randomize(numChoices) {
    return Math.floor(Math.random() * numChoices)
}

function getComputerChoice() {
    let temp = randomize(3);
    if (temp == 0) {
        return "Rock"
    } else if (temp == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function game() {
    let array;
    for (let i = 0; i < 5; i++) {
        array = playRound(prompt("What's your move?"), getComputerChoice(), [0, 0])
    }
    if (array[0] > array[1]) {
        console.log(`You won ${array[0]} to ${array[1]}!`)
    } else {
        console.log(`You lost ${array[0]} to ${array[1]}.`)
    }
}

function playRound(playerSelection, computerSelection, score) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    while (true) {
        if (p == c) {
            console.log("You tied!");
        } else if (p == "paper" && p != c) {
            if (c == "rock") {
                score[0] += 1;
                console.log("You Win! Paper beats Rock");
                return score;
            } else {
                score[1] += 1;
                console.log("You Lose! Scissors beats Paper");
                return score;
            }
        } else if (p == "scissors" && p != c) {
            if (c == "rock") {
                score[1] += 1;
                console.log("You Lose! Rock beats Scissors");
            } else {
                score[0] += 1;
                console.log("You Win! Scissors beats Paper");
            }
        } else {
            if (c == "paper") {
                score[1] += 1;
                console.log("You Lose! Paper beats Rock");
            } else {
                score[0] += 1;
                console.log("You Win! Rock beats Scissors");
            }
        }
        return score;
    }
}