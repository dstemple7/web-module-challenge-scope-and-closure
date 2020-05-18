// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, cb) {
  return cb(stringList);
}

const firstElement = function(stringList){
  return stringList[0];
}

processFirstItem(['foo', 'bar'], firstElement);

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * A: In counter1, the variable count is declared inside the function counterMaker whereas in counter2, the variable count is declared outside the cuntion counter2.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
  A: There is a closure in counter1, because the var counter1 has access to the results from counterMaker after counterMaker has been invoked whereas counter2 runs and is done each time.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * A: The counter1 would be preferable if the function is going to be invoked multiple times whereas counter2 would be better if the function is just going to be invoked once.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let min = 0;
  let max = 2;
  return Math.floor(Math.random() * (max-min +1)) + min;
}

console.log(inning());

const innningScore = inning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game 
in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, inningAmount){
  let home = 0
  let away = 0
  for (let i = 0; i < inningAmount; i++) {
      home = home + cb();
      away = away + cb();
  }
  console.log('"Home": '  + home + ",");
  console.log('"Away": '  + away + ",");
}

finalScore(inning, 9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(cb, inningAmount){
  let home = 0
  let away = 0
  for (let i = 0; i < inningAmount; i++) {
    home = home + cb();
    away = away + cb();
  }
  console.log ("1st Inning:" + home + '-' + away);
  console.log ("2nd Inning:" + home + '-' + away);
  console.log ("3rd Inning:" + home + '-' + away);
  console.log ("4th Inning:" + home + '-' + away);
  console.log ("5th Inning:" + home + '-' + away);
  console.log ("6th Inning:" + home + '-' + away);
  console.log ("7th Inning:" + home + '-' + away);
  console.log ("8th Inning:" + home + '-' + away);
  console.log ("9th Inning:" + home + '-' + away); 
  console.log ("Final Score:" + home + '-' + away);
}

scoreboard(inning, 9);