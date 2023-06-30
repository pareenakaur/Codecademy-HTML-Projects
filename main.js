function getSleepHours(day){
  day = day.toLowerCase();
  switch(day){
    case 'monday':
      return 5;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 11;
      break;
    case 'saturday':
      return 4;
      break;
    case 'sunday':
      return 9;
      break;
    default:
      return  'Invalid Input';
  }
}

console.log(getSleepHours('monday'));
console.log(getSleepHours('holiday'));

function getActualSleepHours(){
  let sum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return sum;
}

function getIdealSleepHours(){
  const idealHours = 10;
  return idealHours * 7;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours){
    let over = actualSleepHours - idealSleepHours;
    console.log(`You got more sleep than needed (by ${over} hours). Shakes head.`);
  } else {
    let debt = idealSleepHours - actualSleepHours;
    console.log(`You need to get more sleeep (by ${debt} hours)!!!!`);
  }
}

calculateSleepDebt();
