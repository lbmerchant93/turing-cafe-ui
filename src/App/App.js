import React, { Component } from 'react';
import './App.css';
import ResyCard from '../Components/ResyCard';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResyCard />
        </div>
      </div>
    )
  }
}

export default App;
