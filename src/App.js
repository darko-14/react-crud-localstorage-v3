import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { getAllContacts, createContact } from './service/api'

class App extends Component {

  constructor(){
    super()
    this.state = {
      contacts: [],
      currentIndex: -1
    }
  }

 

  componentDidMount = async () => {
    const response = await fetch('http://localhost:4000/contacts');
    const data = await response.json();
    this.setState({contacts: data})
  }

    // handleShowAdd = () =>{
  //   this.setState({showAdd: !this.state.showAdd})
  // }

  // getNewId = () => {
  //   var list = this.getContacts()
  //   if(list.length > 0){
  //     return list[list.length-1].id + 1
  //   }
  //   return 1
  // }

  onAdd = data => {
    if(this.state.currentIndex === -1){
      
      const response = fetch('http://localhost:4000/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res=>res.json()).then(r=>console.log(r))
    

  }
    else{
      
      const id = this.state.contacts[this.state.currentIndex].id;
      fetch(`http://localhost:4000/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

    }
  }

  onDelete = id => {
    fetch(`http://localhost:4000/contacts/${id}`, { 
      method: 'DELETE' 
    })
  }

  onEdit = index => {
    this.setState({currentIndex: index})
  }

  onContactChange = contact => {
    this.onAdd(contact)
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
