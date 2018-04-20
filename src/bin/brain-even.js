#!/usr/bin/env node
import { greeting, userGreeting, gameCycle, getRandomInt, isEven } from '..';

greeting();
userGreeting();
gameCycle(0, getRandomInt, isEven);
