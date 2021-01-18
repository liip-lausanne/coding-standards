# CSS

- We prefer [Tailwind](https://tailwindcss.com/) over other frameworks.
- We postprocess our stylesheets with [PostCSS](https://postcss.org/), for example to ensure [browsers support](/browsers-support) or [optimize the output](https://cssnano.co/).
- If really necessary, we preprocess our stylesheets with [Sass](https://sass-lang.com/) using the SCSS syntax.

::: tip NOTICE
The following applies only when you create your own declarations, not if you stick to Tailwind’s utility classes.
:::

## Code Styling

### Rules of thumb

- Apply the principles of [Object-oriented CSS](https://github.com/stubbornella/oocss/wiki).
- Name classes according to the [BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) or in `kebab-case` when not applicable.
- Keep the precedence as low as possible:
  - Prefer classes over element/attribute for selectors, never use IDs.
  - Don’t nest rule sets without explicit reason and never more than 3 levels; prefer more specific names.
- Take advantage of the cascade to avoid repeating declarations.
- Avoid using Sass’ `@extend` and only extend [placeholder selectors](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_foo) if you really want to.
- Use helper classes as long as the pattern doesn’t repeat.
- Split each component into a dedicated file (see [Files Organization](#files-organization) below).

### Declarations groups & order

We separate declarations of the same type in groups, here’s an example:

```scss
.class {
  // The box
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  overflow: hidden;

  // Positioning
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  // Typeface
  color: white;
  font-family: 'Helvetica', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  // Styling
  background-color: red;
  border: 1px solid blue;
  border-radius: 3px;
  cursor: pointer;

  // All other properties
  pointer-events: none;
}
```

### Tools

You can install [Stylelint](https://stylelint.io/) to validate stylesheets code style. We have our own [Stylelint configuration](https://github.com/team-rawbot/stylelint-config-rawbot) package with predefined rules to validate code styling compliance.

Check the list of [editor plugins](https://stylelint.io/user-guide/complementary-tools/#editor-plugins) for instant validation right in your favorite editor.

## Files organization

We organize our partials into separates folders:

| Folder     | Description                                                                                                           | Children                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| settings   | Variables & common settings                                                                                           | Usually one `_settings` file                                      |
| tools      | Sass functions and mixins                                                                                             | Usually one `_mixins` and one `_functions` file                   |
| vendor     | Third-parties code, prefer Node modules when available                                                                |                                                                   |
| defaults   | All the defaults & global elements (html, body, h1, p, blockquote, …)                                                 | We often see `_layout`, `_typography`, `_forms`, or `_fonts` here |
| components | Standalone group of classes forming a single reusable component (`.user-card`, `.dashboard-panel`, `.site-header`, …) | One file per component, named as the component main class         |
| pages      | Very specific code dedicated to one page                                                                              | One file per page                                                 |
| helpers    | Various specific classes reusable anywhere (`.text-brand`, `.img-circle`, …)                                          | Group similar classes per files (`_text`, `_images`, …)           |
