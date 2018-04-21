import { cons } from 'hexlet-pairs';
import { getRandomInt } from '..';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const customRandom = () => {
  const rand = getRandomInt(1, 100);
  return cons(rand, isEven(rand));
};

export default customRandom;
