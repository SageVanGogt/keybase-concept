import React, { Component } from 'react';
import './App.css';
import MapContainer from './../MapContainer/MapContainer';
import * as API from './../../apiCalls/apiCalls';
import * as cleaner from './../../cleaners/locationCleaner';
import { connect } from 'react-redux';

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
  }

  formatAddress = () => {
    const street = this.state.street.replace(' ', '+');
    const city = this.state.city.replace(' ', '+');
    const state = this.state.state.replace(' ', '+');
    return (
      `${street},+${city},+${state}`
    );
  }

  render() {
    return (
      <div className="App">
        <MapContainer />
        <form
          action="submit"
          onSubmit={this.handleSubmit}
          className="current-location-form">
          <legend className="address-form-legend">
            Enter your full address here.
              </legend>
          <input
            type="text"
            name="street"
            onChange={this.handleChange}
            placeholder="street"
            className="street-input" />
          <input
            type="text"
            name="city"
            onChange={this.handleChange}
            placeholder="city"
            className="city-input" />
          <input
            type="text"
            name="state"
            onChange={this.handleChange}
            placeholder="state"
            className="state-input" />
          <input
            type="submit"
            className="address-sbmt-btn"
            value="Submit" />
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => 
    dispatch(addCurrentLocation(location))
});

export default connect(null, mapDispatchToProps)(App);
