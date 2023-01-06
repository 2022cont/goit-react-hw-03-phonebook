import React, { Component } from 'react';

import Form from './form/Form';
import { ContactList } from './сontactList/ContactList';

class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  formHandelSubmit = data => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, data] })
  };

  deleteContact = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }));
  };

  onInputClick = event => {
    event.preventDefault();
    this.setState({ filter: event.target.value });

  };

  findContact = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter))
  };

  render() {
    let findArray = this.findContact();

    return (

      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formHandelSubmit} contacts={this.state.contacts} />

        <h2>Contacts</h2>

        <label >Find contact by name</label>

        <input
          type="text"
          placeholder={this.state.filter ? this.state.filter : 'Search ...'}
          value={this.state.filter}
          onInput={this.onInputClick}

        />

        <ContactList
          contacts={findArray}
          onDeleteContact={this.deleteContact}
        />

      </div>
    );
  }
}
export default App;
