# eslint-config-suddi

[![CircleCI](https://img.shields.io/circleci/project/suddi/eslint-config-suddi.svg?maxAge=2592000)](https://circleci.com/gh/suddi/eslint-config-suddi)
[![codecov](https://codecov.io/gh/suddi/eslint-config-suddi/branch/master/graph/badge.svg)](https://codecov.io/gh/suddi/eslint-config-suddi)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f3cbca070bbd4488b579748680348c28)](https://www.codacy.com/app/suddir/eslint-config-suddi?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=suddi/eslint-config-suddi&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/dt/eslint-config-suddi.svg)]()
[![npm](https://img.shields.io/npm/v/eslint-config-suddi.svg?maxAge=2592000)](https://www.npmjs.com/package/eslint-config-suddi)
[![David](https://img.shields.io/david/suddi/eslint-config-suddi.svg)](https://david-dm.org/suddi/eslint-config-suddi)
[![David](https://img.shields.io/david/dev/suddi/eslint-config-suddi.svg)](https://david-dm.org/suddi/eslint-config-suddi?type=dev)
[![license](https://img.shields.io/github/license/suddi/eslint-config-suddi.svg?maxAge=2592000)](https://github.com/suddi/eslint-config-suddi/blob/master/LICENSE)

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
		"eslint": "^3.0.0"
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
		"eslint": "^3.0.0"
	},
	"eslintConfig": {
		"extends": "suddi/frontend"
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
