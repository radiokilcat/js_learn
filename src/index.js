import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';


export const greeting = () => console.log('Welcome to the Brain Games!');

export const userGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`hi ${userName} !`);
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameCycle = (count, question) => {
  const questionPair = question();
  const questionValue = car(questionPair);
  const correctAnswer = cdr(questionPair);

  if (count === 3) {
    console.log('Congratulations, Bill!');
    return 0;
  }
  const userAnswer = readlineSync.question(`Question: ${questionValue} `);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return gameCycle(count + 1, question);
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
  Let's try again, Bill!`);
  return gameCycle(count, question);
};
