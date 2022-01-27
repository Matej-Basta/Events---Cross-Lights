const button = document.getElementById("button-cross");
const stop = document.getElementById("stop");
const walk = document.getElementById("walk");

button.addEventListener("click", () => {
  stop.className = "stop-off";
  walk.className = "walk-on";

  setTimeout(() => {
    stop.className = "stop-on";
    walk.className = "walk-off";
  }, 5000);
});
