

let ms = 0, s = 0, m = 0, h = 0;
let timer = null;

const display = document.querySelector('.timer-display');
const laps = document.querySelector('.laps');

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    ms++;
    if (ms === 100) { ms = 0; s++; }
    if (s === 60) { s = 0; m++; }
    if (m === 60) { m = 0; h++; }

    updateDisplay();
}

function updateDisplay() {
    display.innerText = getTimer();
}

function getTimer() {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
}

function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stopTimer();
    ms = s = m = h = 0;
    updateDisplay();
}

function restart() {
    reset();
    start();
}

function lap() {
    if (timer) {
        const li = document.createElement('li');
        li.innerText = getTimer();
        laps.appendChild(li);
    }
}

function resetlap() {
    laps.innerHTML = "";
}
