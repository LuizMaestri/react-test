import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href={this.props.linkUrl} className="navbar-brand">
                            {this.props.title}
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}