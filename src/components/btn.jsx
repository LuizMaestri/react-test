import React from 'react';

export default class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false
        };
        this.toggleClick = this.toggleClick.bind(this);
    }
    toggleClick() {
        this.setState({
            click: !this.state.click
        });
    }
    render() {
        let btnClass = this.state.click ? 'btn btn-success' : 'btn btn-default';
        let title = this.state.click ? this.props.textActive : this.props.children;
        return (
            <button className={btnClass} onClick={this.toggleClick}>{title}</button>
        );
    }
}

module.exports = Btn;