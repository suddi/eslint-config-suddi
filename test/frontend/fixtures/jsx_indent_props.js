'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class Component extends React.Component {
    render() {
        return (
            <div>Hello {this.props.name}!</div>
        );
    }
}

Component.propTypes = {
    name: PropTypes.string.isRequired
};

class CorrectComponent extends React.Component {
    render() {
        return (
            <Component
                name='Steven Hyde'/>
        );
    }
}

class IncorrectComponent extends React.Component {
    render() {
        return (
            <Component
            name='Steven Hyde'/>
        );
    }
}

module.exports.correct = CorrectComponent;
module.exports.incorrect = IncorrectComponent;
