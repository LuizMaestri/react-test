import React from 'react';

class Contact extends React.Component {
    render() {
        let call = this.props.call
        return (
            <tr>
                <th scope="row">{call.id}</th>
                <td>{call.name}</td>
                <td>{call.email}</td>
                <td>{call.subject}</td>
                <td>{call.message}</td>
            </tr>
        );
    }
};


export default class List extends React.Component {
    render() {
        let contactsNode = this.props.data.map((call) => (<Contact key={call.id} call={call} />));
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Assunto</th>
                        <th>Mensagem</th>
                    </tr>
                </thead>
                <tbody>
                    {contactsNode}
                </tbody>
            </table >
        );
    }
};

module.exports = List;