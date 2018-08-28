import React, { Component } from 'react';
import { mapKey } from './../../apiKey';
import PropTypes from 'prop-types';
import MapComponent from '../MapComponent/MapComponent';
import './MapContainer.css';

const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`;

export class MapContainer extends Component {
  constructor(props) {
    super(props);


  }



  render() {
    return (
      <div className="map-container">
       
      </div>
    );
  }
}

MapContainer.propTypes = {
};

export default MapContainer;