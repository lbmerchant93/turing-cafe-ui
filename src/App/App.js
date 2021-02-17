import React, { Component } from 'react';
import './App.css';
import ResyCard from '../Components/ResyCard';
import Form from '../Components/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => this.setState({reservations: reservations}))
  }

  addResy = (newResy) => {
    const post = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...newResy})
    }
    fetch('http://localhost:3001/api/v1/reservations', post)
      .then(res => res.json())
    this.setState({ reservations: [...this.state.reservations, newResy] });
  }

  deleteResy = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
      'Content-type': 'application/json'
      },
    })
      .then(res => res.json())
    const filteredResys = this.state.reservations.filter(res => res.id !== id);
    this.setState({ reservations: filteredResys })
  }

  render() {
    const { reservations } = this.state;

    const resys = reservations.map(res => {
      return (<ResyCard reservation={res} key={res.id} deleteResy={this.deleteResy}/>)
    })

    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <section className='resy-form'>
          <Form addResy={this.addResy} />
        </section>
        <section className='resy-container'>
          {resys}
        </section>
      </main>
    )
  }
}

export default App;
