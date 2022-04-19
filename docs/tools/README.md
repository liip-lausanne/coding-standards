# Tools

This is a list of tools we frenquently use for various projects.

## Dev environment

### Node-only projects

For styleguides, SPA or any other app using only Node.js, we prefer to keep things simple by installing it directly on our machine using [nvm](https://github.com/nvm-sh/nvm). A `.nvmrc` file containing the appropriate Node.js version number should be present at the root of every project. Run `nvm use` in the project directory to switch the Node.js version.

### Larger projects

Most recent and new projects should use Docker (potentially with [Pontsun](https://github.com/liip/pontsun)). There are no ready-made solution for common front-end tools at the time of writing.

Older projects use Vagrant through [Drifter](https://github.com/liip/drifter). It has a [webpack role](https://liip-drifter.readthedocs.io/en/latest/roles/webpack.html) you can enable to automatically set it up.

Each project must provide a setup guide on how to get started.

## Styleguides

### Fractal Starterkit

The [Fractal Starterkit](https://github.com/liip/styleguide-starterkit) is a boilerplate to scaffold new styleguides using Fractal preconfigured with webpack.

### Storybook Starterkit <Badge type="warning" text="WIP" />

The [Storybook Starterkit](https://github.com/liip/storybook-starterkit) is another boilerplate to scaffold new styleguides but using Storybook.

## Vue

### Create Vue

When creating a new Single Page App with Vue.js, we favor the official [Create Vue](https://vuejs.org/guide/quick-start.html) to generate the project foundations.

### Nuxt

When server-side rendering makes sense, we prefer [Nuxt.js](https://nuxtjs.org/) over other frameworks to create universal apps.

## Testing

### Jest

For unit and integration testing, we use [Jest](https://jestjs.io/).

### Cypress

For end-to-end testing, we use [Cypress](https://www.cypress.io/).

## Legacy

### Vue CLI

Older Vue.js SPA use the legacy [Vue CLI](https://cli.vuejs.org/) to orchestrate the dev environment and build the app.
