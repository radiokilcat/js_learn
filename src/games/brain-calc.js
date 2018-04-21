import { cons } from 'hexlet-pairs';
import { getRandomInt } from '..';

const quest = () => {
  const first = getRandomInt(1, 100);
  const second = getRandomInt(1, 100);
  const random = getRandomInt(1, 3);
  switch (random) {
    case 1:

      return cons(`${first} + ${second}`, String(first + second));
    case 2:

      return cons(`${first} - ${second}`, String(first - second));
    case 3:

      return cons(`${first} * ${second}`, String(first * second));
    default: return 0;
  }
};

export default quest;
