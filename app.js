let timerElement = document.querySelector('.timerClock');
let sub1 = document.querySelector('.sub1');
let sub2 = document.querySelector('.sub2');
let sub3 = document.querySelector('.sub3');
let follow1 = document.querySelector('.follow1');
let follow2 = document.querySelector('.follow2');
let follow3 = document.querySelector('.follow3');
let dono1 = document.querySelector('.dono1');
let dono2 = document.querySelector('.dono2');
let dono3 = document.querySelector('.dono3');
let minus = document.querySelector('.minus');
let minusButton = document.querySelector('.minusBtn');


let time = localStorage.getItem('time');
let timeToSecs;

if (Number(time)) {
    timeToSecs = Number(time);
    updateTimer(0);
} else {
    let timePrompt = prompt("Preostalo sati: H:M (BEZ RAZMAKA, DVOTOČKA IZMEĐU, I BEZ NULA ISPRED!!!");
    let setTimePrompt = timePrompt.split(":");
    console.log(setTimePrompt)
    timeToSecs =  Number(setTimePrompt[0]) * 60 * 60 + Number(setTimePrompt[1]) * 60;
    console.log(timeToSecs);
    localStorage.setItem('time', String(timeToSecs));
    updateTimer(0);
}

function updateTimer(task) {
    timeToSecs += task;
    localStorage.setItem('time', String(timeToSecs));

    let hours = Math.floor(timeToSecs / 3600);
    let minutes = Math.floor((timeToSecs - hours * 3600) / 60);
    let secs = timeToSecs - hours * 3600 - minutes * 60
    timerElement.innerHTML = `${hours} : ${minutes} : ${secs}`; 
}

sub1.addEventListener('click', () => updateTimer(Number(sub1.dataset.asd) * 15 * 60));
sub2.addEventListener('click', () => updateTimer(Number(sub2.dataset.asd) * 15 * 60));
sub3.addEventListener('click', () => updateTimer(Number(sub3.dataset.asd) * 15 * 60));

follow1.addEventListener('click', () => updateTimer(Number(sub1.dataset.asd) * 2 * 60));
follow2.addEventListener('click', () => updateTimer(Number(sub2.dataset.asd) * 2 * 60));
follow3.addEventListener('click', () => updateTimer(Number(sub3.dataset.asd) * 2 * 60));

dono1.addEventListener('click', () => updateTimer(Number(sub1.dataset.asd) * 4 * 60));
dono2.addEventListener('click', () => updateTimer(Number(sub2.dataset.asd) * 4 * 60));
dono3.addEventListener('click', () => updateTimer(Number(sub3.dataset.asd) * 4 * 60));

minusButton.addEventListener('click', () => updateTimer(-(minus.value * 60)));

setInterval(() => updateTimer(-1), 1000);

