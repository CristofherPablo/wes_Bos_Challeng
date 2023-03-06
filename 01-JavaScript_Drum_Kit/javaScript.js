window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; //ending the function if pressed an invalid key.
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing");
});