import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';


class App extends Component {

  constructor(){
    super()
    this.state = {
      showAdd: true,
      contacts: this.getContacts(),
      currentIndex: -1
    }
    this.handleShowAdd=this.handleShowAdd.bind(this)
  }

  getContacts(){
    if(JSON.parse(localStorage.getItem('list')) == null){
      localStorage.setItem('list', JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem('list'))
  }

  handleShowAdd(){
    this.setState({showAdd: !this.state.showAdd})
  }

  getNewId(){
    var list = this.getContacts()
    if(list.length > 0){
      return list[list.length-1].id + 1
    }
    return 1
  }

  onAdd = data => {
    if(this.state.currentIndex === -1){
      var id = this.getNewId()
      var obj = {id, ...data}
      this.setState({contacts: [...this.state.contacts, obj]})
      localStorage.setItem('list', JSON.stringify([...this.state.contacts, obj]))
    }else{
      var list = this.getContacts()
      list[this.state.currentIndex] = {id:list[this.state.currentIndex].id, name:data.name, phone:data.phone}
      this.setState({contacts: list})
      localStorage.setItem('list', JSON.stringify(list))
      this.setState({currentIndex: -1})
    }
  }

  onDelete = id => {
    this.setState({contacts: this.state.contacts.filter((i) => i.id !== id)})
    localStorage.setItem("list", JSON.stringify(this.state.contacts.filter((i) => i.id !== id)));
  }

  onEdit = index => {
    this.setState({currentIndex: index})
  }

  render(){
    return (
      <div className="App">
        <Header 
          handleShowAdd={this.handleShowAdd} 
          formOpened={this.showAdd} />
          <h3>{this.state.currentIndex}</h3>
        {this.state.showAdd && <ContactForm 
                                  onAdd={this.onAdd} 
                                  contacts={this.state.contacts} 
                                  currentIndex={this.state.currentIndex}/>}
        {this.state.contacts.length > 0 ? <ContactList 
                                  contacts={this.state.contacts} 
                                  onDelete={this.onDelete}
                                  onEdit={this.onEdit} /> : 'No contacts'}

      </div>
    );
  }
}

export default App;
