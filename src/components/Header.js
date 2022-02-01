import React, { Component } from 'react';
import '../App.css'

export default class Header extends Component {
  render() {
    return (
        <div className='header'>
            Contact List App
            <button onClick={this.props.handleShowAdd}>{this.props.formOpened ? 'Close' : 'Submit'}</button>
        </div>
    )
  }
}
