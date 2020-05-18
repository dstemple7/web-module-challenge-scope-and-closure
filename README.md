# Scope and Closure Challenge

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## JavaScript Foundations

## Scope and Closures

## Objectives

- Explain function scope
- Describe what closure is, how closure is created in a program and why it is important to understand closures in JavaScript  

## Introduction

This challenge focuses on both scope and closures.

In this challenge you will be working to build a `scoreboard` (in the console) that takes randomly generated data and keeps track of a game's progress. If you're not familiar with the rules of baseball what you need to know is this: there are 9 innings and teams take turns "at-bat." Teams can only score while they are at bat. A team stops being at bat once they have gotten 3 `outs` by either striking out or through game play. You can read more about baseball rules [here](https://www.rulesofsport.com/sports/baseball.html).

A scoreboard in a major league stadium looks something like this. In fact, the scoreboard at Fenway Park in Boston is actually quite famous. 

![Fenway Scoreboard](https://storage.googleapis.com/afs-prod/media/media:e959506330fd4e5890023c93cfbaac55/800.jpeg)

There are layers upon layers of nested functions within the game of baseball. Your challenge today will be to work through tasks associated with these layers, and ultimately to produce a scoreboard that logs in the console.

## Instructions

### Task 1 - Set Up Project and Tests

1. Fork repo and add TL as collaborator on Github
2. Clone _your_ fork (not Lambda's repo by mistake!)
3. `cd` into your newly cloned repository
4. Create a new branch by typing `git checkout -b <firstName-lastName>`
5. Work on your branch, push commits and create PR as usual

### Task 2a - MVP code

Find the file `index.js` and complete the tasks.

### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences). 
  A: A closure is how a function is used within a function and then accessed outside of that function when it's output would normally be inaccessible, sort of breaking the typical scope rules.

2. Study the following code, then answer the questions below.

```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell? 
  A: A closure is used with the anonymous function in the second line of function personalDice. I can tell in that it's used in a way that allows the variables dansRoll & zoesRoll to later access the random number generator inside the function personalDice.
b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
  A: What would always be the same is the string "Dan rolled a " and what would be different would be the number, which would be a random number between 1-6.
c. What is the lexical scope of `newRoll`? 
  A: The lexical scope of newRoll is block level, i.e. within the anonymous function's curly brackets nested inside of the function personalDice.

### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions
  A: I would predict that the responses would be true then false because a is defined as b then redefined as 3 but but is not defined. The question asks if it's not undefined which cancel out to say is a defined which it is then is b defined which it is not. I don't know why anything we learned today applies to this or if it is the right answer and I haven't tried to run this JS code in repl.it or VS Code's Live Server.  So kinda just a guess??? Tried running it but got a reference error and I tried reading that page and I'm super confused but leaving my original answer.

```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

  A: David's Answer

```js
function createBase(baseNum){
  return function(addNum){
    return baseNum + addNum;
  }
}

var addSix = createBase(6);
var addEight = createBase(8);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
console.log(addEight(10)); // returns 18
console.log(addEight(21)); // returns 29
```

3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
  A: Functional programming's basic elements are mostly variables & functions wehreas object oriented programming's ("OOP") basic elements are mostly objects and methods. Functional programming is ideal when you mostly have a fixed set of data, and you're evolving the codebase to primarily do more things with the same data over time versus OOP which is ideal when you mostly have a fixed set of things that you want to do to an evolving and expanding set of data. Said differently, functional programming is best used when there are a small number of things with many operations whereas OOP is best used when theare are many things with a small number of operations. OOP uses abstraction, which is creating a simple model out of a complex set.

## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission Format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your Team Lead as a reviewer on the pull request
- [ ] Your Team Lead will count the project as complete by merging the branch back into master
