import { cons } from 'hexlet-pairs';
import { getRandomInt } from '..';

const findGcd = (a, b) => {
  if (a > b) {
    if (a % b === 0) {
      return b;
    }
    return findGcd(b, a % b);
  }
  if (a % b === 0) {
    return b;
  }
  return findGcd(a, b % a);
};

const quest = () => {
  const first = getRandomInt(1, 100);
  const second = getRandomInt(1, 100);
  return cons(`${first}, ${second}`, String(findGcd(first, second)));
};
export default quest;
