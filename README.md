# Getting started Jest with Typescript

### Goal

Write unit test with Jest and Typescript

### Agenda

1. Step 1: Simplest start set
1. Step 2: Add Babel for ES2015
1. Step 3: Add Typescript

## Step 1: Simplest start set

Create a directory and install jest

```
mkdir hello-jest
cd hello-jest
yarn add -D jest
```

Create a js file to test named `sum.js`

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Create a test js file to test `sum.js`

```js
// sum.test.js
const sum = require("./sum");

it("add 3 + 4 to be 7", () => {
  expect(sum(3, 4)).toBe(7);
});
```

Add scripts to `package.json`

```json
~~
"scripts": {
    "test": "jest --watchAll"
}
~~
```

Open terminal and run test

```
yarn test
```

## Step 2: Add ES2015

Add babel dev moduels follow

- @babel/core
- @babel/polyfill
- @babel/preset-env

```
yarn add -D @babel/core @babel/polyfill @babel/preset-env
```

Create a `.babelrc` file

```json
{
  "presets": ["@babel/preset-env"]
}
```

Updates js files with ES2015 syntax

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

```js
// sum.test.js
const sum = require("./sum");

it("add 3 + 4 to be 7", () => {
  expect(sum(3, 4)).toBe(7);
});
```

## Step 3: Add Typescript

Add typescript dev moduels follow

- @babel/preset-typescript
- @types/jest
- babel-jest

```
yarn add -D @babel/preset-typescript @types/jest babel-jest
```

Update `.babelrc` file

```json
// .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"]
}
```

Change js files to typescritp files

- sum.js --> sum.ts
- sum.test.ts --> sum.test.ts

Update sum.ts files with typescript

```js
// sum.ts
function sum(a: number, b: number): number {
  return a + b;
}
export { sum };
```

### References

- [https://jestjs.io/docs/en/getting-started](https://jestjs.io/docs/en/getting-started)
