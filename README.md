# A docs theme for Pico CMS

## Software stack

| Package                                  | Description        |
| ---------------------------------------- | ------------------ |
| [Bulma](https://bulma.io/)               | CSS Framework      |
| [Sass](https://sass-lang.com/)           | CSS compiler       |
| [Prism](https://prismjs.com/)            | Syntax highlighter |
| [Font Awesome](https://fontawesome.com/) | Icons              |

## Installation

Copy this repos contents to `themes/docs`.  
Then activate it in your `config/config.yml`:
```yaml
...
theme: docs
...
```

## Development

Bulma is contained as a submodules. Clone like so:

```bash
git clone --recurse-submodules https://github.com/Tooloop/pico-docs-theme.git themes/docs
```

Now you can compile scss changes like this:

```bash
sass --watch themes/tooloop-docs/css/styles.scss:themes/tooloop-docs/css/styles.css --style compresse
d
```