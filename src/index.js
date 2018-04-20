import readlineSync from 'readline-sync';


export const greeting = () => console.log('Welcome to the Brain Games!');

export const userGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`hi ${userName} !`);
};

export const cycle = (count) => {
  if (count === 3) {
    console.log('Congratulations, Bill!');
    return 0;
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const randomNumber = getRandomInt(1, 100);
  const answer1 = readlineSync.question(`Is ${randomNumber} is even number?`);
  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const correctAnswer = isEven(randomNumber);
  if (answer1 === correctAnswer) {
    console.log('Correct!');
    return cycle(count + 1);
  }
  console.log(`${answer1} is wrong answer ;(. Correct answer was ${correctAnswer}.
  Let's try again, Bill!`);
  return cycle(count);
};
