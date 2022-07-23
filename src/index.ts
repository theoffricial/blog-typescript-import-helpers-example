// ignore this script
import './disable-node-to-look-for-dependencies-on-parents-folders';

import {add} from './math';

console.log('1 + 2 =', add(1, 2));

// To show how TypeScript handles with "async-await"
(async function bla()  {
    await Promise.resolve(42)
})

// To show how TypeScript handles "export star"
export * from './math'