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

let missingDay;
let missingHours;
let missingMinutes;
let missingSeconds;

console.log(oneDay);

//creo una funzione orologio
function getTimeWatch() {
  // cotante che definisca il tempo di adesso
  const nowDate = new Date();

  // costante che mi definisca il tempo di domani
  const tomorrowDate = new Date(2023, 7, 25, 9, 30, 0, 0);
  // console.log(tomorrowDate);

  // definisco il tempo rimanente
  let missingTime = tomorrowDate - nowDate;
  // console.log(missingTime);

  // blocco del mio orologio
  if (missingTime <= 0) {
    missingTime = 0;
    clearTimeout(clock);
  }

  // converto il calcolo del missingTime
  // giorni
  missingDay = Math.floor(missingTime / oneDay);

  // ore
  missingHours = Math.floor(missingTime / oneHour) % 24;

  // minuti
  missingMinutes = Math.floor(missingTime / oneMinute) % 60;

  // secondi
  missingSeconds = Math.floor(missingTime / oneSecond) % 60;

  daysEl.innerHTML = missingDay;
  if (missingDay < 10) {
    daysEl.innerHTML = "0" + missingDay;
  } else {
    daysEl.innerHTML = missingDay;
  }

  hoursEl.innerHTML = missingHours;
  if (missingHours < 10) {
    hoursEl.innerHTML = "0" + missingHours;
  } else {
    hoursEl.innerHTML = missingHours;
  }

  minutesEl.innerHTML = missingMinutes % 60;
  if (missingMinutes < 10) {
    minutesEl.innerHTML = "0" + missingMinutes;
  } else {
    minutesEl.innerHTML = missingMinutes;
  }

  secondsEl.innerHTML = missingSeconds % 60;
  if (missingSeconds < 10) {
    secondsEl.innerHTML = "0" + missingSeconds;
  } else {
    secondsEl.innerHTML = missingSeconds;
  }
}

//faccio partire la funzione alla partenza
getTimeWatch();

// collego il tutto con la timing functions
const clock = setInterval(getTimeWatch, 1000);
