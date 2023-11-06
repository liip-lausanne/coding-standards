# Browsers Support

## Principles

- Use native and well supported features as much as possible
- Use new syntaxes only if they are in an advanced stage of specification, transpile them automatically using build tools
- Avoid APIs that are not supported by the browsers your project needs to support, we don’t want to ship polyfills

## Compatibility

### Syntax

Vite, our go-to bundler, use [EsBuild](https://esbuild.github.io/api/#target) under the hood and automatically transpiles the code to [support a defined range of browsers](https://vitejs.dev/guide/build.html#browser-compatibility) by default for both CSS & JavaScript.

You can change the list of compatible browsers by customizing the [`build.target`](https://vitejs.dev/config/build-options.html#build-target) option.

### APIs

Avoid APIs that are not fully supported in the first place. If you really need them, consider degrading the exeperience gracefully. As a last resort, include a dedicated polyfill through renowned sources like [core-js](https://github.com/zloirock/core-js).

### Legacy

Older projects often use [Babel](https://babeljs.io/) with [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) to transpile JavaScript and include API polyfills.

Projects that do not use Vite may use [Browserslist](https://github.com/browserslist/browserslist) to define the list of browsers we want to be compatible with and [Autoprefixer](https://github.com/postcss/autoprefixer) to add CSS prefixes. They shouldn’t be necessary in a Vite/EsBuild setup.

## Resources

- [CanIUse.com](https://caniuse.com/) allows you to check browsers support for a given feature
