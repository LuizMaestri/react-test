import React from 'react';

export default class Title extends React.Component {
    render() {
        let titleStyle = {
            color: "#777676",
            fontSize: "50px"
        };
        return (
            <div className="row">
                <h1 style={titleStyle}>{this.props.children}</h1>
            </div>
        );
    }
}