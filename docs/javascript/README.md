# JavaScript

- We write modern JavaScript that we eventually transpile to support all the browsers we have to (see [Browsers Support](/browsers-support/)).
- We manage dependencies with [npm](https://www.npmjs.com/package/npm).
- We use [EsLint](http://eslint.org/) and [Prettier](https://prettier.io/) to ensure consistency.

## Code styling

We combine a set of EsLint rules (to avoid errors, ensure security and best practices) with Prettier (to enforce a certain style).

### Setup

Install dependencies:

```bash
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier @liip-lausanne/eslint-config
```

::: tip NOTICE
We prefer JavaScript configuration files over JSON so we can add comments and logic if necessary.
:::

Create an EsLint config file named `.eslintrc.js` at the project root with:

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@liip-lausanne', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};
```

Create a Prettier config file named `prettier.config.js` at the project root with:

```js
module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
};
```

Add some scripts in your package.json to validate/format files:

```json
// ...
"scripts": {
  // ...
  "eslint": "eslint .",
  "eslint:fix": "npm run eslint -- --fix",
  // ...
}
// ...
```

See [scripts](/scripts/) for conventions.

### Related

- [@liip-lausanne/eslint-config](https://github.com/liip-lausanne/eslint-config)
- [EsLint editor integrations](http://eslint.org/docs/user-guide/integrations)
- [Prettier editor integrations](https://prettier.io/docs/en/editors.html)

## Testing

We prefer [Jest](https://jestjs.io/) to run unit & functional tests and [Cypress](https://www.cypress.io/) for end-to-end tests.

We enjoy [msw](https://github.com/mswjs/msw) to mock asynchronous requests.

## Third-parties

Our go-to framework is [Vue.js](https://vuejs.org/) with its friends [Vuex](https://vuex.vuejs.org/) and [Vue Router](https://router.vuejs.org/) if necessary. In the case of a <abbr title="Single Page App">SPA</abbr>, we use [Vue CLI](https://cli.vuejs.org/) to scaffold the project.

Libraries we often use accross projects:

- [Lodash](https://lodash.com/) for utility methods
- [Axios](https://github.com/axios/axios) for asynchronous requests
- [date-fns](https://date-fns.org/) to work with time and dates
- [accounting.js](http://openexchangerates.github.io/accounting.js/) to work with money and currencies
