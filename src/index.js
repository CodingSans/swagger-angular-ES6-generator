import 'trace';
Error.stackTraceLimit = 50;
import 'clarify';
import 'babel/polyfill';

import './register.js';

import { starter as core } from 'swaeg-core';

core();
