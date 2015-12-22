/* eslint-disable no-process-env */

import path from 'path';
process.env.NODE_PATH = path.join(__dirname, './modules');
import module from 'module';
module.Module._initPaths();

/* eslint-enable no-process-env */
