let raceNumber = Math.floor(Math.random() * 1000);
var runnerRegistrationEarly = true; // a variable that indicates whenever a runner registered early or not.
var runnerAge = 18; // runner's age

/* if (runnerAge >= 18 && runnerRegistrationEarly) {
  raceNumber = raceNumber + 1000;
  console.log("This is your race number: " + raceNumber);
}
*/

if (runnerAge >= 18 && runnerRegistrationEarly) {
  console.log(
    `Your race will start at 9:30AM. Your race number is: ${raceNumber}`
  );
} else if (runnerAge >= 18 && runnerRegistrationEarly === false) {
  console.log(
    `Your race will start at 11:00AM. Your race number is: ${raceNumber}`
  );
}

if (runnerAge < 18) {
  console.log(
    `Your race will start at 12:30PM. Your race number is ${raceNumber}`
  );
}
