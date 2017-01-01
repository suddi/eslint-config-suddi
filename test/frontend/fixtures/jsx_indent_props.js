'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const Component = React.createClass({
    propTypes: {
        name: PropTypes.string.isRequired
    },

    render: function () {
        return (
            <div>Hello {this.props.name}!</div>
        );
    }
});

module.exports.correct = React.createClass({
    render: function () {
        return (
            <Component
                name='Steven Hyde'/>
        );
    }
});

module.exports.incorrect = React.createClass({
    render: function () {
        return (
            <Component
            name='Steven Hyde'/>
        );
    }
});
