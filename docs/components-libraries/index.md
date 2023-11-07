# Components libraries

When a brand has multiple projects using a similar design or when a project is complex enough to make it worthwhile, we like to maintain a documentation of the various building blocks composing the user interface.

Such documentation is useful to:

- provide an overview of all the available components and their variants to the stakeholders
- showcase code examples for developers to reuse
- validate design decisions before implementation in websites/apps
- run automated tests and audits in one place

## For JavaScript applications

Applications that use common components-oriented JavaScript libraries like [Vue](https://vuejs.org/) or [React](https://react.dev/) generally use [Storybook](https://storybook.js.org/) for the documentation.

## For other usecases

When working with more traditional templating systems, we tend to create generic components using only HTML, CSS and JavaScript. Storybook isn’t the best tool for that, so we use [Fractal](https://fractal.build/) instead.

Fractal doesn’t handle assets management on its own, therefor we made [our own starterkit](https://github.com/liip/styleguide-starterkit) that is preconfigured with a couple of tools, especially webpack.

::: warning
Fractal future is very much unknown at the moment and we’re trying to find an alternative before it stops working. We think a custom solution based on a static site generator would be a good compromise between complexity et flexibility. That’s why we started the [eleventy-design-system](https://gitlab.liip.ch/rawbot/eleventy-design-system) project.
:::
