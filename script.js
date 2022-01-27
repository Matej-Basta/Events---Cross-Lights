const button = document.getElementById("button-cross");
const stop = document.getElementById("stop");
const walk = document.getElementById("walk");

const countdownStart = document.getElementById("countdown-start");
const countdownEnd = document.getElementById("countdown-end");

button.addEventListener("click", () => {
  let seconds = Math.floor(Math.random() * 5) + 2;
  countdownStart.innerHTML = "The time to green: " + seconds;
  let interval = setInterval(() => {
    seconds--;
    countdownStart.innerHTML = "The time to green: " + seconds;
  }, 1000);

  setTimeout(() => {
    stop.className = "stop-off";
    walk.className = "walk-on";
    clearInterval(interval);
    countdownStart.innerHTML = "";
    let seconds2 = 5;
    countdownEnd.innerHTML = "The time when there is green: " + seconds2;
    let newInterval = setInterval(() => {
      seconds2--;
      countdownEnd.innerHTML = "The time when there is green: " + seconds2;
    }, 1000);
    setTimeout(() => {
      stop.className = "stop-on";
      walk.className = "walk-off";
      clearInterval(newInterval);
      countdownEnd.innerHTML = "";
    }, 5000);
  }, seconds * 1000);
});
