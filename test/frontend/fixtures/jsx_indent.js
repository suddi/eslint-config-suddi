'use strict';

const React = require('react');

const Component = React.createClass({
    render: function () {
        return (
            <div>Hello World!</div>
        );
    }
});

module.exports.correct = React.createClass({
    render: function () {
        return (
            <div>
                <Component/>
                <div><Component/></div>
            </div>
        );
    }
});

module.exports.incorrect = React.createClass({
    render: function () {
        return (
            <div>
            <Component/>
            </div>
        );
    }
});
