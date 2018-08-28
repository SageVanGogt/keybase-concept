import React, { Component } from 'react';
import { mapKey } from './../../apiKey';
import PropTypes from 'prop-types';
import MapComponent from '../MapComponent/MapComponent';
import './MapContainer.css';

const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`;

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobLocation: {lat: 39.758680, lng: -104.998634}
    }
  }



  render() {
    return (
      <div className="map-container">
       
      </div>
    );
  }
}

MapContainer.propTypes = {
  jobLocation: PropTypes.object
};

export default MapContainer;