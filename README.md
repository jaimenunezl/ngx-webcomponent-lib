# Web Components

## Directory

- `projects/web-components` has the web components library and atomic components
- `projects/web-sandbox` has the web app for testing the web components flows
- `projects/web-storybook` has the web app for review web components with storybook
- `src/app` allow to test the web components library in dev mode

## Requirement

- Unix terminal
- NodeJS 16.x.x

## Installation

```bash
yarn install
yarn wc:build env=<dev|prod>
```

## Start dev mode

```bash
yarn start:dev
```

## Start Sandbox

```bash
yarn start:sandbox:dev
```

## Start Storybook

```bash
yarn start:storybook:dev
```

## Create a Web Component

```bash
yarn wc:create name=<component-name>
```

## Build a Web Component

```bash
yarn wc:build env=<prod|dev>
```
> Note: `env=dev` allow generating `.js` files without versioning

### Load into dev project

1. Add script file into angular.json

```json
{
  "projects": {
    "ngx-web-component-lib": {
      "architect": {
        "build": {
          "options": {
            "scripts": ["dist/web-components/example.js"]
          }
        }
      }
    }
  }
}
```

2. Add script into `src/index.html`

```html
<script src="example.js"></script>
```
## Test Web Components

```bash
 yarn wc:test:ci
```
