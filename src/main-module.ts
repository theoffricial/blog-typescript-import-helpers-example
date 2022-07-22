import {add} from './math/math-main-module';


console.log('1 + 2 =', add(1, 2));

// To show how TypeScript handles with "async-await"
(async function bla()  {
    await Promise.resolve(42)
})

// To show how TypeScript handles "export star"
export * from './math/math-main-module'