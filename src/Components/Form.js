import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    if(event.target.name === 'number') {
      this.setState({ [event.target.name]: parseInt(event.target.value) })
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  submitResy = event => {
    event.preventDefault();
    const newResy = {
      ...this.state,
      id: Date.now(),
      number: parseInt(this.state.number)
    }
    this.props.addResy(newResy);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  }

  render() {
    return (
      <div className='form-inputs'>
        <input
        className='name-input'
        type='text'
        name='name'
        placeholder='Name'
        value={this.state.name}
        onChange={event => this.handleChange(event)}/>
        <input
        className='date-input'
        type='text'
        name='date'
        placeholder='Date (mm/dd)'
        value={this.state.date}
        onChange={event => this.handleChange(event)}/>
        <input
        className='time-input'
        type='text'
        name='time'
        placeholder='Time'
        value={this.state.time}
        onChange={event => this.handleChange(event)}/>
        <input
        className='number-input'
        type='number'
        name='number'
        value={this.state.number}
        onChange={event => this.handleChange(event)}/>
        <button className='submit' onClick={event => this.submitResy(event)}>Make Reservation</button>
      </div>
    )
  }
}
export default Form;
