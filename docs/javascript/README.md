# JavaScript

* We write modern JavaScript that we eventually transpile to support all the browsers we have to (see [Browsers Support](/browsers-support/)).
* We manage dependencies with [npm](https://www.npmjs.com/package/npm).
* We use [EsLint](http://eslint.org/) and [Prettier](https://prettier.io/) to ensure consistency.

## Code styling

### EsLint

We have our own config package which allows us to have common rules for all projects.

You can find all the relevant informations including example of code styling on the [eslint-config-rawbot](https://github.com/team-rawbot/eslint-config-rawbot) repository.

You should install the [plugin](http://eslint.org/docs/user-guide/integrations) for your editor.

### Prettier

Prettier is an opinionated formatter that will rewrite JavaScript for you following predefined rules; usually when you save a file.

We usually configure it with a `prettier.config.js` file at the project root using the following settings:

```js
module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
};
```

You should install one of the [editor plugins](https://prettier.io/docs/en/editors.html) as well.

## Testing

We prefer [Jest](https://jestjs.io/) to run unit & functional tests and [Cypress](https://www.cypress.io/) for end-to-end tests.

## Third-parties

Our go-to framework is [Vue.js](https://vuejs.org/) with its friends [Vuex](https://vuex.vuejs.org/) and [Vue Router](https://router.vuejs.org/) if necessary. In the case of a <abbr title="Single Page App">SPA</abbr>, we use [Vue CLI](https://cli.vuejs.org/) to scaffold the project.

Libraries we often use accross projects:

* [Lodash](https://lodash.com/) for utility methods
* [Axios](https://github.com/axios/axios) for asynchronous requests
* [date-fns](https://date-fns.org/) to work with time and dates
* [accounting.js](http://openexchangerates.github.io/accounting.js/) to work with money and currencies