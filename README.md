# **validatees**

![npm bundle size (version)](https://img.shields.io/bundlephobia/min/validatees/latest?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/validatees?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/validatees?style=for-the-badge)
![npm](https://img.shields.io/npm/v/validatees?style=for-the-badge)

Validation package for ES6+, TypeScript and JavaScript(CommonJS and Module) ready.

# Features

- 🚀**Easy to use**: Easy to install in your project.
- ✅**ES6+ && TS**: TypeScript and ES6+ support(JS).
- 🐭**Small footprint**: Less then 3kb package size.
- 📦**No dependencies**: You don't depend on anything else.

# Getting Started

## Installation

To use this package, **install** using `npm`, `yarn` or `pnpm`📥:

```bash
# npm
npm install validatees
# yarn
yarn add validatees
# pnpm
pnpm add validatees
```

## Usage

```js
// ES6+ JavaScript CommonsJs
const validatees = require("validatees");
// TypeScript || ES6+ JavaScript module
import validatees from "validatees";
```

### Types

Type checking can be difficult, but with `validatees` types, it's easy.

**isFalsy**:</br>
Made from ['Falsy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

```js
const { isFalsy } = require("validatees");
isFalsy(0); // true
isFalsy(1); // false
```

**isFalsyExtended**:</br>
Made from ['Falsy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).</br>
Also includes Array and object checking.

```js
const { isFalsyExtended } = require("validatees");
isFalsyExtended(1); // false
isFalsyExtended(0); // true
isFalsyExtended([]); // true
isFalsyExtended({}); // true
```

**isTruthy**:</br>
Everything not falsy is truthy. </br>
Made from ['Truthy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

```js
const { isTruthy } = require("validatees");
isTruthy(1); // true
isTruthy(0); // false
```

**isTruthyExtended**:</br>
Everything not falsy is truthy. </br>
Made from ['Truthy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
Also includes Array and object checking.

```js
const { isTruthyExtended } = require("validatees");
isTruthyExtended(1); // true
isTruthyExtended(0); // false
isTruthyExtended([]); // false
isTruthyExtended({}); // false
```

**isString**:</br>
Check if value is string.

```js
const { isString } = require("validatees");
isString("string"); // true
isString(1); // false
```

**isNullish**:</br>
Check if value is null or undefined.

```js
const { isNullish } = require("validatees");
isNullish(null); // true
isNullish(undefined); // true
isNullish(0); // false
```

### Matchers

Matchers are functions that check if a value matches a certain pattern or value.

**isSoftMatch**:</br>
Check if two values soft match with each other.

```js
const { isSoftMatch } = require("validatees");
isSoftMatch("string", "STRING"); // true
isSoftMatch("string", "abc"); // false
isSoftMatch(1, 1.0); // true
```
