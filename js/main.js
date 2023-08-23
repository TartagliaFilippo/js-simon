// collego gli elementi del DOM
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

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

// converto il calcolo del missingTime
// giorni
const missingDay = Math.floor(missingTime / oneDay);
console.log(missingDay);

// ore
const missingHours = Math.floor(missingTime / oneHour);
console.log(missingHours);

// minuti
const missingMinutes = Math.floor(missingTime / oneMinute);
console.log(missingMinutes);

// secondi
const missingSeconds = Math.floor(missingTime / oneSecond);
console.log(missingSeconds);
