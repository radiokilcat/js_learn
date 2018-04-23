import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomInt } from '..';

const quest = () => {
  const questNumber = getRandomInt(100, 2000);
  const smallestDigit = (num) => {
    const strNum = String(num);
    let minDigit = strNum[0];
    let index = 0;
    for (let i = 0; i < strNum.length - 1; i += 1) {
      if (minDigit > strNum[i]) {
        minDigit = strNum[i];
        index = i;
      }
    }
    return cons(minDigit, index);
  };

  const greatestDigit = (num) => {
    const strNum = String(num);
    let maxDigit = strNum[0];
    let index = 0;
    for (let i = 0; i < strNum.length - 1; i += 1) {
      if (maxDigit < strNum[i]) {
        maxDigit = strNum[i];
        index = i;
      }
    }
    return cons(maxDigit, index);
  };
  const isBalanced = (number) => {
    if (car(greatestDigit(number)) - car(smallestDigit(number)) <= 1) {
      return true;
    }
    return false;
  };
  const makeBalanced = (num) => {
    let arrNum = [];
    const greatestIndex = numb => cdr(greatestDigit(numb));
    const smallestIndex = numb => cdr(smallestDigit(numb));
    for (let i = 0; i < num.length; i += 1) {
      arrNum += num[i];
    }
    while (!isBalanced(num)) {
      arrNum[greatestIndex(num)] -= 1;
      arrNum[smallestIndex(num)] += 1;
    }
    return arrNum;
  };
  return cons(questNumber, makeBalanced(questNumber));
};


export default quest;
