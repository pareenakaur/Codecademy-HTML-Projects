let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const runnerAge = 19;

if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly){
  console.log( `Runner will race at 9:30 am. Their race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log( `Runner will race at 11:00 am. Their race number is ${raceNumber}.`);
} else if (runnerAge <= 18){
  console.log( `Runner will race at 12:30 pm. Their race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
