import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        phone: ''
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.currentIndex !== this.props.currentIndex){
            this.setState(this.props.contacts[this.props.currentIndex])
        }
    }

    handleAdd(e){
        e.preventDefault()
        this.props.onAdd({ name: this.state.name, phone: this.state.phone })
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
