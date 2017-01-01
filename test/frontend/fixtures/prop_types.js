'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

module.exports.correct = React.createClass({
    propTypes: {
        name: PropTypes.string.isRequired
    },

    render: function () {
        return (
            <div>Hello {this.props.name}!</div>
        );
    }
});

module.exports.incorrect = React.createClass({
    render: function () {
        return (
            <div>Hello {this.props.name}!</div>
        );
    }
});
