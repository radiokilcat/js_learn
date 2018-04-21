#!/usr/bin/env node

import { greeting, userGreeting, gameCycle } from '..';
import quest from '../games/brain-gcd';

greeting();
userGreeting();
gameCycle(0, quest);
