#!/bin/sh

function run() {
    rm -rf node_modules
    npm cache clean
    nvm use $1
    npm install
    npm test
}

case "$CIRCLE_NODE_INDEX" in
    0)
        npm test
        ;;
    1)
        run 4
        ;;
    2)
        run 5
        ;;
    3)
        run 6
        ;;
esac
