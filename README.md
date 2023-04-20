# A docs theme for Pico CMS

## Software stack

| Package                                  | Description        |
| ---------------------------------------- | ------------------ |
| [Bulma](https://bulma.io/)               | CSS Framework      |
| [Sass](https://sass-lang.com/)           | CSS compiler       |
| [Vue.js](https://vuejs.org/)             | Javascript UI      |
| [Prism](https://prismjs.com/)            | Syntax highlighing |
| [Font Awesome](https://fontawesome.com/) | Icons              |

## Installation

Copy this repos contents to `themes/Tooloop-Docs`.  
Then activate it in your `config/config.yml`:
```yaml
...
theme: Tooloop-Docs
...
```

## Development

Bulma is contained as a submodules. Clone like so:

```bash
git clone --recurse-submodules https://github.com/Tooloop/Tooloop-Docs-Theme.git themes/Tooloop-Docs
```

Now you can compile scss changes like this:

```bash
sass --watch themes/Tooloop-Docs/css/styles.scss:themes/Tooloop-Docs/css/styles.css --style compressed
```

## Customization

### Footer

You can optionally create a file `_footer.md` in your content folder.
In there you can define Sections of link lists which will be rendered as columns.

Example:

```yaml
---
Sections:
    - text: Get in touch
      items:
        - text: Tooloop Multimedia
          url: https://www.tooloop.de
        - text: Matrix chat room
          url: https://app.element.io/#/room/#tooloop-os:matrix.org
    - text: Source Code
      items:
        - text: Tooloop OS
          url: https://github.com/Tooloop/Tooloop-OS
          icon: fab fa-github
        - text: Packages
          url: https://github.com/Tooloop/Tooloop-Packages
          icon: fab fa-github
        - text: Control Center
          url: https://github.com/Tooloop/Tooloop-Control
          icon: fab fa-github
        - text: Docs
          url: https://github.com/Tooloop/Tooloop-OS-Website
          icon: fab fa-github
---
```