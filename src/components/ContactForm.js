import React, { Component } from 'react';

class ContactForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: props.contact ? props.contact.name : '',
            phone: props.contact ? props.contact.phone : ''
        }
    }
    
    handleAdd(e){
        e.preventDefault()
        this.props.onContactChange({ name: this.state.name, phone: this.state.phone })
        this.setState({name: '', phone: ''})
    }

    render() {
        return (
            <form className='form' onSubmit={e => this.handleAdd(e)}>               
                <h2>Add new contact</h2>
                <input name='name' 
                    value={this.state.name} 
                    placeholder='Enter name here.'  
                    onChange={e => this.setState({name: e.target.value})}
                    required/><br />
                <input name='phone' 
                    value={this.state.phone} 
                    placeholder='Enter phone here.' 
                    onChange={e => this.setState({phone: e.target.value})}
                    required/><br />
                <input type='submit' />
            </form>
            )
    }
}

export default ContactForm;
