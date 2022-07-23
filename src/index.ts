// To ensure node not taking libraries from parent folders
// IGNORE
import './____disable-node-to-look-for-dependencies-on-parents-folders';


// #### the library main module ####

import { add } from './math';

console.log('1 + 2 =', add(1, 2));

// To demonstrate how TypeScript transpile "async-await"
(async function bla()  {
    await Promise.resolve(42)
})

// To show how TypeScript handles "export star"
export * from './math'