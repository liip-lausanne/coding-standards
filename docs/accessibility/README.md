# Accessibility

The web is for everyone and therefore, we aim to target [WCAG 2.1 level AA](https://www.w3.org/TR/WCAG21/) for everything if not stated otherwise.

[Read more about Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

## Principles

Users should be able to:

- navigate with a keyboard
- navigate using assistive technologies (e.g. swipe gestures with VoiceOver on iOS)
- change the appearance through their browser settings (contrast, zoom, …)
- use a screen reader

## Examples

### Use the right HTML element for the right job

**Example:** Use `a` for links to a different page or anchor and `button` for actions on click.

**Why:** they are focusable with the keyboard and pressing <kbd>Enter</kbd> triggers the click out-of-the-box.

### Label everything

**Example:** A button with only an icon must be labelled, so it’s announced by screen readers when it receive focus:

```xml
<button aria-label="Settings">
  <svg aria-hidden="true" focusable="false">
    <use xlink:href="icons.svg#cog" />
  </svg>
</button>
```

**Example:** An image that is part of the content must have an alternate text describing its content:

```html
<img
  src="cute-doggo.webp"
  alt="Black and white border collie looking up at you. Their eyes are wide and their mouth is shut. You can see a little bit of their bottom lip which makes them look like they’re waiting for you to believe in yourself."
/>
```

**Example:** A form field must have an associated label:

```xml
<label for="email-field">E-mail</label>
<input type="email" id="email-field" />
```

### Use native elements

A native `select` is always better than any custom counterpart. Prefer limiting your design possibilities than preventing users from interacting with elements.

## Resources

- Creating accessible design patterns and widget using [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)
- [Chūshō](https://www.chusho.dev/) is our library of accessible Vue.js components
