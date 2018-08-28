import React, { Component } from 'react';
import './App.css';
import MapContainer from './../MapContainer/MapContainer';
import * as API from './../../apiCalls/apiCalls';

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const address = this.formatAddress();
    try {
      const locationInfo = await API.fetchGeocode(address);
      if (locationInfo.status === "ZERO_RESULTS") {
        this.props.setError('That address could not be found');
        return;
      }
      const cleanLocation = cleaner.geocodeCleaner(locationInfo);
      this.props.setLocation(cleanLocation);
    } catch (error) {
      throw Error(error.message);
    }
  };

  formatAddress = () => {
    const street = this.state.street.replace(' ', '+');
    const city = this.state.city.replace(' ', '+');
    const state = this.state.state.replace(' ', '+');
    return (
      `${street},+${city},+${state}`
    );
  };

  render() {
    return (
      <div className="App">
        <MapContainer />

        
      </div>
    );
  }
}

export default App;
