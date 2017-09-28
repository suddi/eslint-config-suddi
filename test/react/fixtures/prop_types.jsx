'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class CorrectComponent extends React.Component {
    render() {
        return (
            <div>Hello {this.props.name}!</div>
        );
    }
}

CorrectComponent.propTypes = {
    name: PropTypes.string.isRequired
};

class IncorrectComponent extends React.Component {
    render() {
        return (
            <div>Hello {this.props.name}!</div>
        );
    }
}

module.exports.correct = CorrectComponent;
module.exports.incorrect = IncorrectComponent;
