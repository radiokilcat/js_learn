import readlineSync from 'readline-sync';


export const greeting = () => console.log('Welcome to the Brain Games!');

export const userGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`hi ${userName} !`);
};
