'use strict';

const React = require('react');

class Component extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        );
    }
}

class CorrectComponent extends React.Component {
    render() {
        return (
            <div>
                <Component/>
                <div><Component/></div>
            </div>
        );
    }
}

class IncorrectComponent extends React.Component {
    render() {
        return (
            <div>
            <Component/>
            </div>
        );
    }
}

module.exports.correct = CorrectComponent;
module.exports.incorrect = IncorrectComponent;
