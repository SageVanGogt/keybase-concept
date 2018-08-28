export const fetchGeocode = async (address) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GEO_KEY}`;  
  try {
    const response = await fetch(url);
    const locationData = await response.json();
    if (!locationData) {
      return new Error('error')
    }
    return locationData;
  } catch (error) {
    throw error;
  }
}; 

export const reverseGeoCode = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GEO_KEY}`;
  const response = await fetch(url);
  const geoData = await response.json();
  return geoData;
}