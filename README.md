# eslint-config-suddi

[![CircleCI](https://img.shields.io/circleci/project/suddi/eslint-config-suddi.svg)](https://circleci.com/gh/suddi/eslint-config-suddi)
[![codecov](https://codecov.io/gh/suddi/eslint-config-suddi/branch/master/graph/badge.svg)](https://codecov.io/gh/suddi/eslint-config-suddi)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f3cbca070bbd4488b579748680348c28)](https://www.codacy.com/app/suddir/eslint-config-suddi)
[![npm](https://img.shields.io/npm/v/eslint-config-suddi.svg)](https://www.npmjs.com/package/eslint-config-suddi)
[![npm](https://img.shields.io/npm/dt/eslint-config-suddi.svg)](https://www.npmjs.com/package/eslint-config-suddi)
[![Greenkeeper badge](https://badges.greenkeeper.io/suddi/eslint-config-suddi.svg)](https://greenkeeper.io/)
[![David](https://img.shields.io/david/suddi/eslint-config-suddi.svg)](https://david-dm.org/suddi/eslint-config-suddi)
[![David](https://img.shields.io/david/dev/suddi/eslint-config-suddi.svg)](https://david-dm.org/suddi/eslint-config-suddi?type=dev)
[![license](https://img.shields.io/github/license/suddi/eslint-config-suddi.svg)](https://raw.githubusercontent.com/suddi/eslint-config-suddi/master/LICENSE)

[![codecov](https://codecov.io/gh/suddi/eslint-config-suddi/branch/master/graphs/commits.svg)](https://codecov.io/gh/suddi/eslint-config-suddi)

````
npm install --save-dev eslint-config-suddi
````

## Usage

- Add ESLint config to your `package.json`, for running on backend code:

```json
{
    "scripts": {
        "lint": "eslint ."
    },
    "devDependencies": {
        "eslint": "^3.0.0",
        "eslint-config-suddi": "^3.0.0"
    },
    "eslintConfig": {
        "extends": "suddi/backend"
    }
}
```

- Add ESLint config to your `package.json`, for running on frontend code:

```json
{
    "scripts": {
        "lint": "eslint ."
    },
    "devDependencies": {
        "eslint": "^3.0.0",
        "eslint-config-suddi": "^3.0.0",
        "eslint-plugin-react": "^6.0.0"
    },
    "eslintConfig": {
        "extends": "suddi/frontend"
    }
}
```

- Then apply the linter with `npm run lint`.

## Examples

For examples on use cases and validation samples, please see:
* [For backend rules](test/backend/fixtures)
* [For frontend rules](test/frontend/fixtures)

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
- Restart Sublime Text

### Atom

- Install `linter` and `linter-eslint` from within the available packages
- Restart Atom

