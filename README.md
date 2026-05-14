# Testing Practice

A JavaScript unit testing exercise from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice). The goal is to practice test-driven development by writing Jest tests for a set of utility functions, then implementing those functions to make the tests pass.

## Functions

**`capitalize(string)`** — Returns the string with its first character uppercased.

**`reverseString(string)`** — Returns the string reversed character by character.

**`calculator`** — An object with four arithmetic methods: `add`, `subtr`, `mult`, and `div`, each taking two numbers and returning the result.

**`encryptWord(word, offset)` / `decryptWord(word, offset)`** — Caesar cipher helpers that shift each letter in a string by the given offset, preserving case and wrapping correctly around the alphabet (`z` + 1 → `a`).

## Tech Stack

- **Jest** — test runner
- **Babel** (`@babel/preset-env`) — transpiles ES module syntax (`import`/`export`) for Jest compatibility
- **Webpack** — bundles the project for the browser

## Getting Started

```bash
npm install
```

Run tests in watch mode:

```bash
npm test
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
  index.js          # capitalize, reverseString, calculator
  caeserCypher.js   # Caesar cipher encrypt/decrypt helpers
  index.test.js     # Jest test suite
```

## Tests

The test suite covers:

- Capitalizing the first character of a string
- Reversing a string
- All four calculator operations with multiple input pairs
- Caesar cipher encryption and decryption, including wrapping (`z → a`) and case preservation
