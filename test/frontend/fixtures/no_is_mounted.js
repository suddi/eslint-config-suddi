'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

module.exports.correct = React.createClass({
    propTypes: {
        handleClick: PropTypes.func.isRequired
    },

    render: function () {
        return <div onClick={this.props.handleClick}>Hello</div>;
    }
});

module.exports.incorrect = React.createClass({
    handleClick: function () {
        setTimeout(function () {
            if (this.isMounted()) {
                return;
            }
        });
    },

    render: function () {
        return <div onClick={this.handleClick.bind(this)}>Hello</div>;
    }
});
