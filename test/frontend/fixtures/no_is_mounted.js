'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class CorrectComponent extends React.Component {
    render() {
        return <div onClick={this.props.handleClick}>Hello</div>;
    }
}

CorrectComponent.propTypes = {
    handleClick: PropTypes.func.isRequired
};

class IncorrectComponent extends React.Component {
    handleClick() {
        setTimeout(function () {
            if (this.isMounted()) {
                return 42;
            }
        });
    }

    render() {
        return <div onClick={this.handleClick.bind(this)}>Hello</div>;
    }
}

module.exports.correct = CorrectComponent;
module.exports.incorrect = IncorrectComponent;
