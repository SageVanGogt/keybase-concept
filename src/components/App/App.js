import React, { Component } from 'react';
import './App.css';
import MapContainer from './../MapContainer/MapContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      street: '',
      city: '',
      state: ''
    };
  }

 

  

  render() {
    return (
      <div className="App">
        <MapContainer />
      </div>
    );
  }
}

export default App;
