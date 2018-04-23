import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';


const greeting = () => console.log('\nWelcome to the Brain Game!');
// const gameTitle = (title) => console.log(`${title}`);
const userGreeting = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`hi ${userName}!\n`);
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


export const gameCycle = (quest) => {
  greeting();
  userGreeting();
  const gameLogic = (count, question) => {
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
      return gameLogic(count + 1, question);
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, Bill!`);
    return gameLogic(count, question);
  };
  gameLogic(0, quest);
};
