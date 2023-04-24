# A docs theme for Pico CMS

## Installation

Copy this contents of this repository to `themes/Tooloop-Docs`.  
Then activate it in your `config/config.yml`:
```yaml
...
theme: Tooloop-Docs
...
```

## Customization

### Logo

You can optionally add a site logo in the navbar:

`content/_meta.md`
```yaml
logo: %assets_url%/tooloop-logo.svg
```


### Search

The theme includes a search function based on these two plugins.
Install these first:

- https://github.com/PontusHorn/Pico-Search
- https://github.com/Tooloop/Pico-Json-Header

Add a search page:

`search.md`

```yaml
---
Title: Search results
Template: search
Hidden: true
---
```

Then enable the search by adding the url to your search page to the meta file.

`content/_meta.md`
```yaml
search: %base_url%/search
```
Also exclude these files from the search:

`config/config.yml`
```yaml
search_excludes:
    - 'search'
    - '_footer'
    - '_meta'
```

### Edit page link

`content/_meta.md`
```yaml
edit_url: https://github.com/Tooloop/Tooloop-OS-Website/edit/master/content/%file%
```

`%file%` will be replaced by the file path relative to the content folder.

### Footer links

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

## Development

Software stack

| Package                                  | Description        |
| ---------------------------------------- | ------------------ |
| [Bulma](https://bulma.io/)               | CSS Framework      |
| [Sass](https://sass-lang.com/)           | CSS compiler       |
| [Vue.js](https://vuejs.org/)             | Javascript UI      |
| [Prism](https://prismjs.com/)            | Syntax highlighing |
| [Font Awesome](https://fontawesome.com/) | Icons              |

Bulma is contained as a submodules. If you want to make changes to the `.scss`
files, you need to clone recursively:

```bash
git clone --recurse-submodules https://github.com/Tooloop/Tooloop-Docs-Theme.git themes/Tooloop-Docs
```

Compile `.scss` changes like this:

```bash
sass --watch themes/Tooloop-Docs/css/styles.scss:themes/Tooloop-Docs/css/styles.css --style compressed
```