# Tools

This is a list of tools we frenquently use for various projects.

## Dev environment

### Node-only projects

For styleguides, SPA or any other app using only Node.js, we prefer to keep things simple by installing it directly on our machine using [nvm](https://github.com/nvm-sh/nvm). A `.nvmrc` file containing the appropriate Node.js version number should be present at the root of every project. Run `nvm use` in the project directory to switch the Node.js version.

### Larger projects

Most recent and new projects should use Docker with [Pontsun](https://github.com/liip/pontsun). There are no ready-made solution for common front-end tools at the time of writing.

Older projects use Vagrant through [Drifter](https://github.com/liip/drifter). It has a [webpack role](https://liip-drifter.readthedocs.io/en/latest/roles/webpack.html) you can enable to automatically set it up.

## Styleguide Starterkit

The [Styleguide Starterkit](https://github.com/liip/styleguide-starterkit) is a boilerplate to scaffold new styleguides using Fractal preconfigured with webpack.

## Storybook Starterkit

The [Storybook Starterkit](https://github.com/liip/storybook-starterkit) is another boilerplate to scaffold new styleguides but using Storybook.

## Kanbasu

[Kanbasu](https://kanbasu.liip.ch/) is our open-source Sass framework that we use on almost all projects. It serves as a set of common components and helpers to build interfaces.

## Tailwind

[Tailwind](https://tailwindcss.com/) is an alternate CSS framework we use on some projects, when the utility-first approach makes more sense.

## Vue CLI

When creating a new Single Page App with Vue.js, we favor the official [Vue CLI](https://cli.vuejs.org/) to generate the project foundations. It comes with a large panel of preconfigured plugins and includes our usual tools (webpack, EsLint, Prettier, Jest, Cypress, …).

## Nuxt

When server-side rendering makes sense, we prefer [Nuxt.js](https://nuxtjs.org/) over other frameworks to create universal apps.
