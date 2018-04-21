#!/usr/bin/env node
import customRandom from '../games/brain-even';
import { gameCycle } from '..';

gameCycle(0, customRandom);
