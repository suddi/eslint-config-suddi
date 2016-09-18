# eslint-config-suddi

[![CircleCI](https://circleci.com/gh/suddi/eslint-config-suddi.svg?style=svg)](https://circleci.com/gh/suddi/eslint-config-suddi)
[![codecov](https://codecov.io/gh/suddi/eslint-config-suddi/branch/master/graph/badge.svg)](https://codecov.io/gh/suddi/eslint-config-suddi)
[![npm](https://img.shields.io/npm/v/eslint-config-suddi.svg?maxAge=2592000)](https://www.npmjs.com/package/eslint-config-suddi)
[![license](https://img.shields.io/github/license/suddi/eslint-config-suddi.svg?maxAge=2592000)](https://github.com/suddi/eslint-config-suddi)

[![codecov](https://codecov.io/gh/suddi/eslint-config-suddi/branch/master/graphs/commits.svg)](https://codecov.io/gh/suddi/eslint-config-suddi)

````
npm install eslint-config-suddi
````

## Usage

- Add ESLint config to your `package.json`, for running on backend code:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"devDependencies": {
		"eslint": "^2.0.0"
	},
	"eslintConfig": {
		"extends": "suddi/backend"
	}
}
```

- Add ESLint config to your `package.json`, for running on backend code:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"devDependencies": {
		"eslint": "^2.0.0"
	},
	"eslintConfig": {
		"extends": "suddi/backend"
	}
}
```

- Then apply the linter with `npm run lint`.

## Setup eslint for Sublime Text 3

- Add the following to your `~/.bashrc` or `~/.zshrc`:

````sh
export NVM_DIR="$HOME/.nvm"

if [ -s $NVM_DIR/nvm.sh ]; then
    source $NVM_DIR/nvm.sh
fi
````

- Install [`Package Control`](https://packagecontrol.io/installation)
- Install `SublimeLinter` and `SublimeLinter-contrib-eslint` via `Package Control`
- Restart Sublime Text 3
