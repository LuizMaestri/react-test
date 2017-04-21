import Call from '../entities/call.jsx';
import Btn from './btn.jsx';
import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = new Call('', '', '', 'R', '');
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(e) {
        let call = this.state;
        call.name = e.target.value;
        this.setState(call);
    }
    handleEmailChange(e) {
        let call = this.state;
        call.email = e.target.value;
        this.setState(call);
    }
    handleSubjectChange(e) {
        let call = this.state;
        call.subject = e.target.value;
        this.setState(call);
    }
    handleMessageChange(e) {
        let call = this.state;
        call.message = e.target.value;
        this.setState(call);
    }
    handleSubmit(e) {
        e.preventDefault();
        let call = this.state;
        if (call.name && call.email && call.subject && call.message) {
            this.props.onCallSubmit(call)
        }
    }
    render() {
        let inputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input style={inputStyle} type="text" className="form-control" name="name" placeholder="Nome" onChange={this.handleNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input style={inputStyle} type="email" className="form-control" name="email" placeholder="E-mail" onChange={this.handleEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Assunto</label>
                    <select defaultValue={this.state.subject} className="form-control" name="subject" onChange={this.handleSubjectChange}>
                        <option value="A">Angular JS</option>
                        <option value="J">JQuery</option>
                        <option value="R">React</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea style={inputStyle} className="form-control" name="message" rows="3" onChange={this.handleMessageChange} />
                </div>
                <Btn textActive="Sending...">
                    Send
                </Btn>
            </form>
        );
    }
};