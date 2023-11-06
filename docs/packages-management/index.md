# Packages management

We use [npm](https://www.npmjs.com/package/npm) to install dependencies and tools.

## Scripts

We use npm scripts to run various commands easily. We're trying to standardize script names across projects, with no regard for the different tools used in the background.

1. Favor npm default scripts such as `start` or `test` over custom ones.
2. Name common scripts based on what they do, not what tools they run: `test:unit` instead of `jest`
3. Name commands that run specific tools with predefined parameters explicitly: `eslint`, `stylelint`, (…)

```json
"scripts": {
  "start": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "eslint": "eslint (…)",
  "eslint:fix": "npm run eslint -- --fix",
  "stylelint": "stylelint (…)",
  "stylelint:fix": "npm run stylelint -- --fix",
  "validate": "npm run eslint && npm run stylelint",
  "format": "npm run eslint:fix && npm run stylelint:fix",
  "test:unit": "jest",
  "test:unit:dev": "npm run jest -- --watch",
  "test:unit:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand",
  "test:e2e": "cypress run",
  "test:e2e:dev": "cypress open",
  "test": "npm run validate && npm run test:unit && npm run test:e2e",
  "release": "release-it",
  "deploy": "rsync (…)"
},
```

::: tip
The _bare double dash_ (`--`) signify the end of the command parameters, those coming after will be forwarded to the command used in the background.
:::
