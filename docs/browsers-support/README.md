# Browsers Support

## Browserslist

We use [browserslist](https://github.com/browserslist/browserslist) to configure the browsers we want to support. Although this depends on the project and client requirements, our current default settings are:

```
last 2 versions
not dead
IE 11
```

We prefer to define this in a `.browserslistrc` file at the project root.

## CSS compatibility

We use [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor-prefixed properties required by the browsers defined above. Autoprefixer automatically reads Browserslist settings.

## JavaScript compatibility

We use [Babel](https://babeljs.io/) with [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) to transpile the JavaScript so it can be interpreted by all the browsers defined above. This preset also reads Browserslist settings automatically.

### Polyfills

Language can be transpiled but features must be polyfilled.

Install [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) and set `@babel/preset-env` option `useBuiltIns` to `usage` to automatically load the necessary polyfills based on your code and Browserslist settings (see above).

Exemple of features that are not transpiled and needs to be polyfilled:
  * `Promise`
  * `Fetch`
  * `NodeList.forEach`
  * `Element.closest`
  * …