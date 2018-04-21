import { cons } from 'hexlet-pairs';
import { getRandomInt } from '..';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const customRandom = () => {
  const rand = getRandomInt(1, 100);
  if (isEven(rand) === true) {
    return cons(rand, 'yes');
  }
  return cons(rand, 'no');
};

export default customRandom;
