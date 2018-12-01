# Assets bundling

To leverage [code splitting](https://webpack.js.org/guides/code-splitting/), [lazy loading](https://webpack.js.org/guides/lazy-loading/) and [tree shaking](https://webpack.js.org/guides/tree-shaking/), we favor module bundlers to manage our assets.

* We prefer [webpack](https://webpack.js.org/) to load and bundle our assets and dependencies together.
* We use [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve our assets during development.