const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const game = document.getElementById('game');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const choices = ['paper','rock','scissors'];
const winner = document.getElementById('winner');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');


        checkWinner();
    });
});

reset.addEventListener('click',() => {
    game.style.display = 'flex';
    selection.style.display ='none';  
})

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

function checkWinner(){
    const computerChoice = pickRandowChoice();

    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);


    if(userChoice === computerChoice){
        // draw
        winner.innerText = 'DRAW!';
    } else if (userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper'){
            //user won
            updateScore(1);
            winner.innerText = 'WIN!';
        } else {
            //user lose
            updateScore(-1);
            winner.innerText = 'LOSE!';
        }

        game.style.display = 'none';
        selection.style.display ='flex';  
}

function updateScore(value){
    score += value;
    scoreEl.innerText = score;
}



function pickRandowChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
    

    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');


    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    selectionEl.querySelector('img');
    img.src = `./image/icon-${choice}.svg`;
    img.alt = choice;
}
