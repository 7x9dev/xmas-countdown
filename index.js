const audio = document.querySelector("#song");
audio.volume = 0.4;

const btn = document.querySelector("#playBtn");
let state = "play";
btn.addEventListener("click", function () {
   if (state === "play") {
      document.querySelector("#song").play();
      state = "pause";
   } else {
      document.querySelector("#song").pause();
      state = "play";
   }
});
