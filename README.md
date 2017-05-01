# Team Rawbot & friends Coding Standards

This project should be use as a set of guidelines for development at Liip Lausanne.

## Overall

We use the following [.editorconfig](http://editorconfig.org/) to ensure consistency:

```ini
root = true

[*]
charset = utf-8

indent_style = space
indent_size = 2

end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true

[*.py]
indent_size = 4
max_line_length = 120

[*.md]
indent_size = 4
trim_trailing_whitespace = false
```

Your favorite IDE/editor might require a [plugin](http://editorconfig.org/#download) to automatically read this file and apply the settings.

## Python/Django

We create new projects using the [Liip Django Template](https://github.com/liip/django-template). We use [flake8](https://pypi.python.org/pypi/flake8) and [flake8-isort](https://pypi.python.org/pypi/flake8-isort) to ensure code quality and style. We use [isort](https://github.com/timothycrosley/isort) to keep the imports organized logically.

Here’s a `setup.cfg` example:

```ini
[pep8]
max-line-length = 120

[flake8]
max-line-length = 120

[isort]
known_first_party = myproject
known_django = django
default_section = THIRDPARTY
line_length = 120
sections = FUTURE,STDLIB,DJANGO,THIRDPARTY,FIRSTPARTY,LOCALFOLDER
```

Flake8 and isort plugins exists for most editors out there.

## JavaScript

We use [EsLint](http://eslint.org/) to ensure code quality and style. We have our own config which allows us to have common rules for all projects.

You can find all the relevant informations including example of code styling on the [eslint-config-rawbot](https://github.com/team-rawbot/eslint-config-rawbot) repository.

EsLint is available as a [plugin for almost all editors](http://eslint.org/docs/user-guide/integrations).

## Stylesheets

* We preprocess our stylesheets with [Sass](https://sass-lang.com/), using the SCSS syntax.
* We name our classes according to the [BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).
* We build our projects on top of [Kanbasu](http://kanbasu.liip.ch/).

We organize our Sass partials similary to Kanbasu, into separates folders:

| Folder      | Description                                                                                                     | Children                                                          |
|-------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| settings    | Variables & common settings                                                                                     | Usually one `_settings` file                                      |
| tools       | Sass functions and mixins                                                                                       | Usually one `_mixins` and one `_functions` file                   |
| vendor      | Third-parties code, prefer Node modules when available                                                          |                                                                   |
| base        | All the defaults & global elements (html, body, h1, p, blockquote, …)                                           | We often see `_layout`, `_typography`, `_forms`, or `_fonts` here |
| helpers     | Various specific classes reusable anywhere (.text-brand, .img-circle, …)                                        | Group similar classes per files (`_text`, `_images`, …)           |
| components  | Standalone group of classes forming a single reusable component (.user-card, .dashboard-panel, .site-header, …) | One file per component, named as the component main class         |
| pages       | Very specific code dedicated to one page                                                                        | One file per page                                                 |

We group similar declarations together and add space between groups, here’s a declaration example:

```scss
.foo {
  // The box model
  display: block;
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
  font-family: 'Helvetica', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;

  // Styling
  background-color: red;
  border: 1px solid blue;
  border-radius: 3px;
  cursor: pointer;

  // All other properties
  pointer-events: none;
}
```

At the moment there’s no tools used to validate code styling compliance.
