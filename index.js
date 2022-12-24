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

const body = document.querySelector('body');
body.setAttribute('style', 'display: flex; flex-direction: column; justify-content: space-between; align-items: center;')

const container = document.querySelector('#container');
const commentary = document.querySelector('#commentary');
const results = document.querySelector('#results');

const rock = document.createElement('btn');
rock.textContent = "Rock";
rock.setAttribute('style', 'background: pink; border: 2px solid black;');
rock.setAttribute('id', 'Rock');

const paper = document.createElement('btn');
paper.textContent = "Paper";
paper.setAttribute('style', 'background: pink; border: 2px solid black;');
paper.setAttribute('id', 'Paper');

const scissors = document.createElement('btn');
scissors.textContent = "Scissors";
scissors.setAttribute('style', 'background: pink; border: 2px solid black;');
scissors.setAttribute('id', 'Scissors');

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

const buttons = document.querySelectorAll('btn');
let score = [0, 0]

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        score = results.textContent = playRound(btn.getAttribute('id'), getComputerChoice(), score, commentary);
    });
});


// function game() {
//     let array;
//     for (let i = 0; i < 5; i++) {
//         array = playRound(prompt("What's your move?"), getComputerChoice(), [0, 0])
//     }
//     if (array[0] > array[1]) {
//         console.log(`You won ${array[0]} to ${array[1]}!`)
//     } else {
//         console.log(`You lost ${array[0]} to ${array[1]}.`)
//     }
// }

function playRound(playerSelection, computerSelection, score, commentary) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    while (Math.max(...score) < 5) {
        if (p == c) {
            commentary.textContent = "You tied!";
        } else if (p == "paper" && p != c) {
            if (c == "rock") {
                score[0] += 1;
                commentary.textContent = "You Win! Paper beats Rock";
                return score;
            } else {
                score[1] += 1;
                commentary.textContent = "You Lose! Scissors beats Paper";
                return score;
            }
        } else if (p == "scissors" && p != c) {
            if (c == "rock") {
                score[1] += 1;
                commentary.textContent = "You Lose! Rock beats Scissors";
            } else {
                score[0] += 1;
                commentary.textContent = "You Win! Scissors beats Paper";
            }
        } else {
            if (c == "paper") {
                score[1] += 1;
                commentary.textContent = "You Lose! Paper beats Rock";
            } else {
                score[0] += 1;
                commentary.textContent = "You Win! Rock beats Scissors";
            }
        }
        return score;
    }
    if (score[0] > score[1]) {
        commentary.textContent = `You won ${score[0]} to ${score[1]}! Reload the page to play again.`
    } else {
        commentary.textContent = `You lost ${score[0]} to ${score[1]}. Reload the page to play again.`
    }
}