import { cons } from 'hexlet-pairs';
import { getRandomInt } from '..';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};
const quest = () => {
  const first = getRandomInt(1, 100);
  const second = getRandomInt(1, 100);
  return cons(`${first}, ${second}`, String(findGcd(first, second)));
};
export default quest;
