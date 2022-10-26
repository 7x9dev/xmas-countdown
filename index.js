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

//countdown
function xmasCountdown() {
   const xmasDay = new Date("December 25, 2022 00:00");
   const now = new Date();
   const timeLeft = xmasDay - now;

   const msInSec = 1000;
   const msInMin = 60 * 1000;
   const msInHr = 60 * 60 * 1000;
   const msInDay = 24 * 60 * 60 * 1000;

   const displayDay = Math.floor(timeLeft / msInDay);
   document.querySelector(".days").textContent = displayDay;

   const displayHr = Math.floor((timeLeft % msInDay) / msInHr);
   document.querySelector(".hrs").textContent = displayHr;

   const displayMin = Math.floor((timeLeft % msInHr) / msInMin);
   document.querySelector(".min").textContent = displayMin;

   const displaySec = Math.floor((timeLeft % msInMin) / msInSec);
   document.querySelector(".sec").textContent = displaySec;

   if (timeLeft <= 0) {
      document.querySelector(".days").textContent = 0;
      document.querySelector(".hrs").textContent = 0;
      document.querySelector(".min").textContent = 0;
      document.querySelector(".sec").textContent = 0;
      clearInterval(timerID);
      newHeading();
   }
}
let timerID = setInterval(xmasCountdown, 1000);

function newHeading() {
   const heading = document.querySelector("h1");
   heading.textContent = "Ho-Ho-Ho! Merry Christmas!";
   heading.classList.add("animation");
}
