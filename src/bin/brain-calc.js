#!/usr/bin/env node

import { greeting, userGreeting, gameCycle } from '..';
import quest from '../games/brain-calc';

greeting();
userGreeting();
gameCycle(0, quest);
