# Whitespace

* We use spaces and not tabs
* 2 spaces by default
* 4 spaces for PHP, Python and Markdown

You should have an [.editorconfig](http://editorconfig.org/) file close to the example below living at your project root to ensure all developers work with the same rules.

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 120

[*.{py,php,md}]
indent_size = 4

[*.md]
trim_trailing_whitespace = false
```

As a developer, ensure you have installed and enabled the [plugin for your editor](http://editorconfig.org/#download).
