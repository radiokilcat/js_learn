#!/usr/bin/env node
import customRandom from '../games/brain-even';
import { greeting, userGreeting, gameCycle } from '..';

greeting();
userGreeting();
gameCycle(0, customRandom);
