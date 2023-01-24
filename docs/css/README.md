# CSS

- We prefer [Tailwind](https://tailwindcss.com/) over other frameworks.
- We postprocess our stylesheets with [PostCSS](https://postcss.org/), for example to ensure [browsers support](/browsers-support) or [optimize the output](https://cssnano.co/).
- If really necessary, we preprocess our stylesheets with [Sass](https://sass-lang.com/) using the SCSS syntax.

## Good practices

> CSS is a lot harder to undo than it is to do.
>
> — [Harry Roberts](https://csswizardry.com/)

### Stay as close as possible to the standard

<Versus>Don’t use Stylus, Sass without the SCSS syntax, or other exotic syntax</Versus>
<Versus>Don’t use framework features with no added value like Tailwind’s <code>@apply flex</code></Versus>
<Versus correct>Use native CSS syntax and features, eventually with syntactic sugar (such as nesting) to reduce repetitions and improve readability</Versus>
<Versus correct>Use framework tools when it prevents repetition and improve consistency: <code>@apply mb-4</code>, <code>box-shadow: 0 0 10px theme('colors.blue.500')</code>; write plain declarations otherwise: <code>display: flex;</code></Versus>

### Create reusable patterns

Apply the principles of [Object-oriented CSS](https://github.com/stubbornella/oocss/wiki).

<Versus>Don’t couple CSS with the HTML structure or elements as it prevent patterns from being reused: <code>header > div</code>, <code>button.btn</code>, <code>#header</code></Versus>
<Versus correct>Stick to classes for selectors to maximize reusability and ease overrides: <code>.site-header</code>, <code>.card</code>, <code>.list-arrows</code></Versus>

Also split each component into a dedicated file (see [Files Organization](#files-organization) below).

### Use conventionnal naming

<Versus>Don’t randomly name classes using various syntaxes and patterns. Example: <code>.Header</code>, <code>.the_header</code>, <code>.the_header-Menu</code></Versus>
<Versus correct>Name classes according to the <a href="https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">BEM syntax</a> to highlight design tokens hierarchy and variants, or in <code>kebab-case</code> when not applicable</Versus>

### Keep the specificity low

<Versus>Never use <code>!important</code>, <code>:not(…)</code>, or any feature that would unnecessarily increase the precedence when a refactor could have prevented using them in the first place</Versus>
<Versus correct>Only when strictly necessary, use <code>!important</code> on very specific declarations, like utility classes. For example: a class named <code>hidden</code> applying <code>display: none</code> only must override any other <code>display</code> declaration on the same element. If the element must become visible, the style shouldn’t be altered, the class must be removed from the element instead.</Versus>

<!-- prettier-ignore -->
<Versus>Don’t unnecessarily nest selectors or alter components behavior based on unrelated parents: <code>.article .article__body</code>, <code>.intro-block--full .slider--fullscreen > .slider__item .btn</code></Versus>

```css
.navbar {
  background-color: white;

  /* This is wrong, there’s no need to nest it under `.navbar`,
     it unnecessarily increases the specificity. Simply place it after. */
  &.navbar--expanded {
    background-color: black;
  }
}
```

<Versus correct>Create variants with class names specific enough to live on their own or use utility classes: <code>.btn--link</code>, <code>.text-center</code></Versus>

```css
/* Always start with the block */
.box {
  background-color: white;
}

/* Then list modifiers, at the same level than the element */
.box--negative {
  background-color: black;

  /* You can nest elements in modifiers */
  .box__body {
    color: white;
  }
}

/* And finally elements, by order of appearance in the HTML */
.box__body {
  color: black;
}
```

### Take advantage of the cascade

<Versus>Don’t set identical, inheritable properties like <code>color</code>, <code>font-…</code>, <code>direction</code>, … on many sibling elements</Versus>
<Versus correct>Set inheritable properties targeting multiple children on a common parent</Versus>

### Enjoy utility classes

<Versus>Avoid cluttering your CSS with many variants of the same pattern: <code>.list-inline--right</code>, <code>.media--right</code>, <code>.actions--right</code></Versus>
<Versus correct>Use a single utility classes to alter the behavior: <code>.text-right</code>, <code>.items-end</code>, <code>.text-gray-500</code></Versus>

### Let the parent handle sizing and outer spacing

A rule of thumb you can apply in 99% of cases is: **a component should adapt to its parent size and only care about its own inner spacing**.

- Need to lay cards on multiple columns? Use `display: grid` on the parent.
- Need space between items in a list or around columns and rows in a grid? Use `gap` on the parent.
- Need space between a title and a paragraph? Add `margin-bottom` on the title or `margin-top` on the paragraph depending if one or the other is optional, but do it **only** for this title or this paragraph in particular (using utility classes for example). Alternatively, add a wrapper around both and use… `gap`!

> It’s gaptastic!
>
> — [Eric Meyer](https://meyerweb.com/)

### Augment rather than deconstruct

<Versus>Undoing existing style can be tedious, reduce composability and requires more code:</Versus>

```css
.card {
  display: flex;
  background-color: var(--light-blue);
}

.card--no-background {
  background-color: transparent;
}
```

<Versus correct>Create additionnal variants and compose them instead:</Versus>

```css
.card {
  display: flex;
}

.card--default {
  background-color: var(--light-blue);
}
```

<Versus>Redefining the same value multiple times at different places can leads to unexpected behaviors and bugs:</Versus>

```css
.btn {
  display: flex;
}
```

In the HTML below, the `sm:flex` style duplicates the value from the CSS above:

```html
<button class="btn hidden sm:flex"></button>
```

<Versus correct>Avoid duplicates by altering only the necessary properties:</Versus>

```html
<button class="btn max-xs:hidden"></button>
```

### Use a mobile-first approach

When they do not imply deconstructing or duplicating code as stated above, you should always use `min-width` media queries first and alter style from the smallest screen and up.

### Use shorthands responsibly

<Versus>Do not use shorthands to set some values without the intent to explicitly override all the others: <code>background: red</code>, <code>padding: 0 10px</code></Versus>
<Versus correct>Set only the value(s) you need: <code>background-color: red</code>, <code>padding-left: 10px; padding-right: 10px</code>.</Versus>

Please read [CSS Shorthand Syntax Considered an Anti-Pattern](https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/) for a detailed explanation.

### Group and order declarations

Separate declarations of the same type into groups and keep them ordered:

```scss
.class {
  // Layouting
  // When this group is simple enough, we merge it with the box below
  display: grid;
  grid-template-columns:
    minmax(100px, max-content)
    repeat(auto-fill, 200px) 20%;
  grid-auto-rows: minmax(200px, auto);
  align-items: center;
  justify-content: end;

  // The box
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
  text-decoration: underline;

  // Styling
  background-color: red;
  border: 1px solid blue;
  border-radius: 3px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  transform: scale(1.1);
  transition: scale 0.2s ease-in-out;

  // All other properties
  cursor: pointer;
  pointer-events: none;
}
```

## Tools

You can install [Stylelint](https://stylelint.io/) to validate stylesheets code style. We have our own [Stylelint configuration](https://github.com/team-rawbot/stylelint-config-rawbot) package with predefined rules to validate code styling compliance.

Check the list of [editor plugins](https://stylelint.io/user-guide/complementary-tools/#editor-plugins) for instant validation right in your favorite editor.

## Files organization

We organize our partials into separates folders:

| Folder     | Description                                                                                                           | Children                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| settings   | Variables & common settings                                                                                           | Usually one `settings` file                                   |
| tools      | Sass functions and mixins                                                                                             | Usually one `mixins` and one `functions` file                 |
| vendor     | Third-parties code, prefer Node modules when available                                                                |                                                               |
| base       | All the default styling and global elements (html, body, h1, p, blockquote, …)                                        | We often see `layout`, `typography`, `forms`, or `fonts` here |
| components | Standalone group of classes forming a single reusable component (`.user-card`, `.dashboard-panel`, `.site-header`, …) | One file per component, named as the component main class     |
| pages      | Very specific code dedicated to one page                                                                              | One file per page                                             |
| utilities  | Various specific classes reusable anywhere (`.text-brand`, `.img-circle`, …)                                          | Group similar classes per files (`text`, `images`, …)         |

## Legacy

### Kanbasu

[Kanbasu](https://kanbasu.liip.ch/) was our open-source framework that we used on almost all projects. It’s a set of common components and helpers to build interfaces written in Sass and following the BEM syntax. It is deprecated and we do not use it for new projects.
