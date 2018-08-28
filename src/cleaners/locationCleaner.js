export const geocodeCleaner = (data) => {
  const results = data.results[0];
  const location = results.geometry.location;
  return location;
}

export const latLngToAddress = (data) => {
  let address = data.results[0].formatted_address;
  return address;
}