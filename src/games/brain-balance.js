import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomInt } from '..';

const quest = () => {
  const questNumber = getRandomInt(100, 2000);

  const smallestDigit = (num) => {
    const str = String(num);
    const compute = (begin, end) => {
    if (str[begin] <= str[end]) {
      if (end === str.length - 1) {
        return cons(str[begin], begin);
      }
      return compute(begin, end + 1);
    }
    if (str[begin] > str[end]) {
      if(end === str.length - 1){
        return cons(str[end], end);
      }
      return compute(begin + 1, end + 1);
    }
    };
    return compute(0, 0);
  };

const greatestDigit = (num) => {
  const str = String(num);
  const compute = (begin, end) => {
  if (str[begin] >= str[end]) {
  if (end === str.length - 1) {
    return cons(str[begin], begin);
  }
  return compute(begin, end + 1);
}
if (str[begin] < str[end]) {
  if(end === str.length - 1){
    return cons(str[end], end);
  }
return compute(begin + 1, end + 1);
}
};
return compute(0, 0);
};

  const isBalanced = (n) => {
    const min = car(smallestDigit(n));
    const max = car(greatestDigit(n));
    const diff = Number(max) - Number(min);
    return (diff <= 1) ? true : false;
  };
 const recursive = (num) => {
      const min = car(smallestDigit(num));
      const max = car(greatestDigit(num));
      const minIndex = cdr(smallestDigit(num));
      const maxIndex = cdr(greatestDigit(num));
      console.log('предпоследний символ : ', String(num).length - 1, 'первый символ : ', String(num)[0]);
      if (isBalanced(num)) {
        return num;
      }
    let newNum = '';
    for (let i = 0; i < String(num).length; i++) {
           if (i === maxIndex) {
            newNum += String(Number(String(num)[i]) - 1);
           }
           if (i === minIndex) {
            newNum += String(Number(String(num)[i]) + 1);
           }
            newNum += String(num)[i];
          }
          console.log('new value', newNum);
          return num;
    };
/*  const test = (num) => {
      const min = car(smallestDigit(num));
      const max = car(greatestDigit(num));
      const minIndex = cdr(smallestDigit(num));
      const maxIndex = cdr(greatestDigit(num));
        console.log(num, isBalanced(num), maxIndex, minIndex, String(num).length);
      if (isBalanced(num)) {
        return String(num);

      }
      let newNum = '';
      for (let i = 0; i === String(num).length - 1; i += 1) {
           if (i = maxIndex) {
            newNum += String(max - 1);
           }
           if (i = minIndex) {
            newNum += string(min + 1);
           }
            newNum += String(num)[i];
          }
          console.log(String(newNum));
          return String(newNum);
    }*/
    /*
    const recursive = (num) => {
      console.log( 'самая большая цифра : ', car(greatestDigit(num)), ' Ее позиция : ', cdr(greatestDigit(num)), ' ', isBalanced(num));
      console.log( 'меньшая : ', car(smallestDigit(num)), ' Ее позиция : ', cdr(smallestDigit(num)));
      console.log(car(greatestDigit(num)) - car(smallestDigit(num)));
      return 9999;
    } /* */



  return cons(questNumber, recursive(questNumber));
};


export default quest;
