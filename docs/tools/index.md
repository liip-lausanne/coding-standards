# Tools

This is a list of tools we frenquently use for various projects.

## Dev environment

### Node-only projects

For components libraries, SPA or any other app using only Node.js, we prefer to keep things simple by installing it directly on our machine using [nvm](https://github.com/nvm-sh/nvm). A `.nvmrc` file containing the appropriate Node.js version number should be present at the root of every project. Run `nvm use` in the project directory to switch the Node.js version.

### Larger projects

They generally use Docker and include a dedicated front-end container. There are no ready-made solution for common front-end tools at the time of writing as it depends mostly on the back-end.

## Components libraries

### Fractal Starterkit <Badge type="danger">Legacy</Badge>

The [Fractal Starterkit](https://github.com/liip/styleguide-starterkit) is a boilerplate to scaffold new components library documentation using Fractal and webpack.

### Eleventy Design System <Badge type="warning">WIP</Badge>

[Eleventy Design System](https://gitlab.liip.ch/rawbot/eleventy-design-system) is a home-made solution based on the static site generator Eleventy and designed to replace Fractal in the future.

## Vue

### Create Vue

When creating a new Single Page App with Vue.js, we favor the official [Create Vue](https://vuejs.org/guide/quick-start.html) to generate the project foundations.

### Nuxt

When a project requires a whole framework, we prefer [Nuxt](https://nuxtjs.org/) over others. But be sure to consider this option very carefuly as the past has shown us that it adds a lot of overhead to simple projects and makes large ones difficult to maintain in the long run.

## Testing

For unit and integration testing, we use [Vitest](https://vitest.dev/) or [Jest](https://jestjs.io/).

For end-to-end testing, we use [Cypress](https://www.cypress.io/).
