import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';
import PropTypes from 'prop-types';

  export const MapComponent = withScriptjs(withGoogleMap((
    { position, ...props }
  ) => {
 
    return (

    );
  }));
  
  MapComponent.propTypes = {
    position: PropTypes.object
  };
  
  export default MapComponent;