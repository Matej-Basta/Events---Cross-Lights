const button = document.getElementById("button-cross");
const stop = document.getElementById("stop");
const walk = document.getElementById("walk");

const countdownStart = document.getElementById("countdown-start");
const countdownEnd = document.getElementById("countdown-end");

//adding a listener to a button
button.addEventListener("click", () => {
  //randomizing the number of seconds a person needs to wait for a green light to appear
  let seconds = Math.floor(Math.random() * 5) + 2;
  countdownStart.innerHTML = "The time to green: " + seconds;
  //interval which decreases the number of seconds till the green light
  let interval = setInterval(() => {
    seconds--;
    countdownStart.innerHTML = "The time to green: " + seconds;
  }, 1000);

  //timeout which changes the lights after the random number of seconds expires, it also stops the interval
  //and starts a new interval which keeps for 5 seconds + it starts a timeout which when is finished, it stops the interval
  //and changes the ligths back
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
