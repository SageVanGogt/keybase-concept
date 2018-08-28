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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
