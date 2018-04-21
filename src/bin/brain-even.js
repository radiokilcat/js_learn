#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { greeting, userGreeting, gameCycle, getRandomInt } from '..';

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

greeting();
userGreeting();
gameCycle(0, customRandom);
