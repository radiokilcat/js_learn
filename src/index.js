import readlineSync from 'readline-sync';


export const greeting = () => console.log('Welcome to the Brain Games!');

export const userGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`hi ${userName} !`);
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomOperation = (a, b) => {
  const random = getRandomInt(1, 3);
  let result = 0;
  let log = '';
  switch (random) {
    case 1:
      result = a + b;
      log = 'a + b';
      break;
    case 2:
      result = a - b;
      log = 'a + b';
      break;
    case 3:
      result = a * b;
      log = 'a + b';
      break;
    default:
      return 0;
  }
  return result;
};


export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};



export const gameCycle = (count, question, func) => {
  const questionValue = question(1, 100);
  const correctAnswer = func(questionValue);

  if (count === 3) {
    console.log('Congratulations, Bill!');
    return 0;
  }
  const userAnswer = readlineSync.question(`Question: ${questionValue} `);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return gameCycle(count + 1, question, func);
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
  Let's try again, Bill!`);
  return gameCycle(count, question, func);
};
