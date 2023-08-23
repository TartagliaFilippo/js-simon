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
