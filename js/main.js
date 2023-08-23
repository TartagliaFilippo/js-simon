// collego gli elementi del DOM
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

// le mie costanti globali di tempo
const oneSecond = 1000;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;

console.log(oneDay);

// cotante che definisca il tempo di adesso
const nowDate = new Date();

// costante che mi definisca il tempo di domani
const tomorrowDate = new Date(2023, 7, 24, 9, 30, 0, 0);
console.log(tomorrowDate);

// definisco il tempo rimanente
const missingTime = tomorrowDate - nowDate;
console.log(missingTime);

//creo una funzione orologio
function getTimeWatch() {
  // converto il calcolo del missingTime
  // giorni
  const missingDay = Math.floor(missingTime / oneDay);

  // ore
  const missingHours = Math.floor(missingTime / oneHour);

  // minuti
  const missingMinutes = Math.floor(missingTime / oneMinute) % 60;

  // secondi
  const missingSeconds = Math.floor(missingTime / oneSecond) % 60;

  daysEl.innerHTML = missingDay;
  hoursEl.innerHTML = missingHours;
  minutesEl.innerHTML = missingMinutes % 60;
  secondsEl.innerHTML = missingSeconds % 60;
}

// collego il tutto con la timing functions
const clock = setInterval(getTimeWatch, 1000);

// blocco del mio orologio
if (missingSeconds == 0) {
  clearInterval(clock);
}
