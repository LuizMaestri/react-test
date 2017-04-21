import Call from '../entities/call.jsx';
import Title from './title.jsx';
import Form from './form.jsx';
import List from './list.jsx';
import Nav from './nav.jsx';
import React from 'react';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calls: [
                new Call("1", "Maria", "maria@mail.com", "R", "My messege test 1."),
                new Call("2", "Pedro", "pedro@mail.com", "A", "My messege test 2.")
            ]
        };
        this.handleCallSubmit = this.handleCallSubmit.bind(this);
    }
    handleCallSubmit(call) {
        let calls = this.state.calls;
        call.id = calls.length + 1;
        calls.push(call);
        this.setState({ calls: calls });
    }
    render() {
        return (
            <div>
                <Nav title="Home" linkUrl="index.html" />
                <div className="container">
                    <Title>
                        Test
                    </Title>
                    <div className="row">
                        <div className="col-md-12">
                            <Form onCallSubmit={this.handleCallSubmit} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <List data={this.state.calls} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};