let timeLeft = 0;
let timerInterval = null;
function updateDisplay() {
let hours = Math.floor(timeLeft / 3600);
let minutes = Math.floor((timeLeft % 3600) / 60);
let seconds = timeLeft % 60;

document.getElementById("timer").innerText =
    String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
}

function startTimer() {

let minutesInput = Number(document.getElementById("minutes").value);

    if (timeLeft > 0 && !timerInterval) {
        timerInterval = setInterval(runTimer, 1000);
        return;
    }

    if (minutesInput <= 0) {
        document.getElementById("message").innerText = "Enter valid minutes";
        return;
    } else {
        document.getElementById("message").innerText = "";
        document.getElementById("minutes").value = "";
    }

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timeLeft = minutesInput * 60;
    updateDisplay();

    timerInterval = setInterval(runTimer, 1000);
}


function runTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById("message").innerText = "Time's up!";
    }
}
 function pauseTimer() {
     clearInterval(timerInterval);
     timerInterval = null;
     document.getElementById("message").innerText = "";
 }

 function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 0;
    updateDisplay();
    document.getElementById("message").innerText = "";
 }