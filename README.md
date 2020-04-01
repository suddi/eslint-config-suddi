# eslint-config-suddi

[![CircleCI](https://img.shields.io/circleci/project/suddi/eslint-config-suddi/master.svg)](https://circleci.com/gh/suddi/eslint-config-suddi)
[![codecov](https://codecov.io/gh/suddi/eslint-config-suddi/branch/master/graph/badge.svg)](https://codecov.io/gh/suddi/eslint-config-suddi)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f3cbca070bbd4488b579748680348c28)](https://www.codacy.com/app/Suddi/eslint-config-suddi)
[![npm](https://img.shields.io/npm/v/eslint-config-suddi.svg)](https://www.npmjs.com/package/eslint-config-suddi)
[![npm](https://img.shields.io/npm/dt/eslint-config-suddi.svg)](https://www.npmjs.com/package/eslint-config-suddi)

[![David](https://img.shields.io/david/suddi/eslint-config-suddi.svg)](https://david-dm.org/suddi/eslint-config-suddi)
[![David](https://img.shields.io/david/dev/suddi/eslint-config-suddi.svg)](https://david-dm.org/suddi/eslint-config-suddi?type=dev)
[![license](https://img.shields.io/github/license/suddi/eslint-config-suddi.svg)](https://raw.githubusercontent.com/suddi/eslint-config-suddi/master/LICENSE)

[![codecov](https://codecov.io/gh/suddi/eslint-config-suddi/branch/master/graphs/commits.svg)](https://codecov.io/gh/suddi/eslint-config-suddi)

````
npm install --save-dev eslint eslint-config-suddi
````

## Rulesets

There are multiple rulesets provided:

- [suddi/angular](angular.js) - rules for angular@^1.0.0 development
- [suddi/backend](backend.js) - rules for node.js development using 4-space indentation
- [suddi/frontend](frontend.js) - rules for react development
- [suddi/node-tab](node-tab.js) - rules for node.js development using tab indentation
- [suddi/react](react.js) - rules for react development

## Usage

- Add ESLint config to your `package.json`, for running on backend code:

````
npm install --save-dev eslint eslint-config-suddi
````

```json
{
    "scripts": {
        "lint": "eslint ."
    },
    "devDependencies": {
        "eslint": "^4.0.0",
        "eslint-config-suddi": "^4.0.0"
    },
    "eslintConfig": {
        "extends": "suddi/backend"
    }
}
```

- Add ESLint config to your `package.json`, for running on React.js code:

````
npm install --save-dev eslint eslint-config-suddi eslint-plugin-react
````

```json
{
    "scripts": {
        "lint": "eslint ."
    },
    "devDependencies": {
        "eslint": "^4.0.0",
        "eslint-config-suddi": "^4.0.0",
        "eslint-plugin-react": "^6.0.0"
    },
    "eslintConfig": {
        "extends": "suddi/react"
    }
}
```

- Add ESLint config to your `package.json`, for running on Angular code:

````
npm install --save-dev eslint eslint-config-suddi eslint-plugin-angular
````

```json
{
    "scripts": {
        "lint": "eslint ."
    },
    "devDependencies": {
        "eslint": "^4.0.0",
        "eslint-config-suddi": "^4.0.0",
        "eslint-plugin-angular": "^3.0.0"
    },
    "eslintConfig": {
        "extends": "suddi/angular"
    }
}
```

- Then apply the linter with `npm run lint`.

## Examples

For examples on use cases and validation samples, please see:
* [For angular rules](test/angular/fixtures)
* [For backend rules](test/backend/fixtures)
* [For frontend rules](test/frontend/fixtures)
* [For node-tab rules](test/node-tab/fixtures)
* [For node rules](test/node/fixtures)
* [For react rules](test/react/fixtures)

## Setup for different editors

### Sublime Text

- Add the following to your `~/.bashrc` or `~/.zshrc`:

````sh
export NVM_DIR="$HOME/.nvm"

if [ -s $NVM_DIR/nvm.sh ]; then
    source $NVM_DIR/nvm.sh
fi
````

- Install [`Package Control`](https://packagecontrol.io/installation)
- Install `SublimeLinter` and `SublimeLinter-contrib-eslint` via `Package Control`
- Run `npm install -g eslint eslint-config-suddi eslint-plugin-react eslint-plugin-angular`
- Restart Sublime Text

### Atom

- Install `linter` and `linter-eslint` from within the available packages
- Run `npm install -g eslint eslint-config-suddi eslint-plugin-react eslint-plugin-angular`
- Restart Atom

### Webstorm

- Install [`ESLint`](https://plugins.jetbrains.com/plugin/7494-eslint)
- Run `npm install -g eslint eslint-config-suddi eslint-plugin-react eslint-plugin-angular`
- Restart Webstorm

### Visual Studio Code

- Select `Shell Command: Install ‘code’ command in PATH` via `Command Palette`
- Install `ESLint` package from within the available extensions
- Run `npm install -g eslint eslint-config-suddi eslint-plugin-react eslint-plugin-angular`
- Restart Visual Studio Code

