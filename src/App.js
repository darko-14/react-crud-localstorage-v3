import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { getAllContacts, createContact, updateContact, deleteContact } from './service/api'

class App extends Component {

  constructor(){
    super();
    this.state = {
      contacts: [],
      currentIndex: -1
    }
  }

  handleAllContacts = (data) => { 
    this.setState({contacts: data});
    console.log(data);
  }

  getContacts(){
    getAllContacts(this.handleAllContacts);
  }

  componentDidMount = () => {
    this.getContacts()
  }

  onAdd = data => {
    if(this.state.currentIndex === -1){
      createContact(data, this.handleAllContacts);
  }else{    
      const contact = this.state.contacts[this.state.currentIndex];
      updateContact(contact, this.handleAllContacts);
    }
  }

  onDelete = id => {
    deleteContact(id);
    
  }

  onEdit = index => {
    this.setState({currentIndex: index});
  }

  onContactChange = contact => {
    this.onAdd(contact);
  }

  render(){
    return (
      <div className="App">
        <Header  />
        <h3>{this.state.currentIndex}</h3>
        {this.state.currentIndex < 0 ? <ContactForm onContactChange={this.onContactChange} /> : null}
        {this.state.currentIndex > -1 ? 
          <ContactForm onContactChange={this.onContactChange} 
                       contact={this.state.contacts[this.state.currentIndex]}/> 
                       : null }
        {this.state.contacts.length > 0 ? <ContactList 
                                  contacts={this.state.contacts} 
                                  onDelete={this.onDelete}
                                  onEdit={this.onEdit} 
                                  /> : 'No contacts'}
      </div>
    );
  }
}

export default App;
