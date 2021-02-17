import React, { Component } from 'react';
import './App.css';
import ResyCard from '../Components/ResyCard';

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

  render() {
    const { reservations } = this.state;

    const resys = reservations.map(res => {
      return (<ResyCard reservation={res} />)
    })

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {resys}
        </div>
      </div>
    )
  }
}

export default App;
