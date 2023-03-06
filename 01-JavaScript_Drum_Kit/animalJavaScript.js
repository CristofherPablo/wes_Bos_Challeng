function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const play = document.querySelector(`div[data-key="${e.keyCode}"]`);
  sound.currentTime = 0;
  sound.play();
  if (!sound) return;
  play.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) =>
  key.addEventListener
  ("transitionend", removeTransition)
);


window.addEventListener("keydown", playSound);
