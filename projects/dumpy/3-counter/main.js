let count = 0;
let numberCount = document.querySelector('.number-count');

const btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', () => {
    count++;
    numberCount.innerText = count;
})

const btnDown = document.querySelector('.btn-down');
btnDown.addEventListener('click', () => {
    count--;
    numberCount.innerText = count;
})

const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', () => {
    count=0;
    numberCount.innerText = count;
})