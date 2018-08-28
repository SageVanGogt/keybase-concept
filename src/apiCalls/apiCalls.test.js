describe('fetchGeocode', () => {
  let mockAddress;

  beforeEach(() => {
    mockAddress = '2600+fairview,+denver,+WA';
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(MOCK.mockGeoInfo)
    }))
  })

  it('should call fetch with the correct params', async () => {
    let expected = `https://maps.googleapis.com/maps/api/geocode/json?address=${mockAddress}&key=${geoKey}`;
    await API.fetchGeocode(mockAddress);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should return an object full of location data', async () => {
    let expected = MOCK.mockGeoInfo;
    let actual = await API.fetchGeocode(mockAddress);

    expect(actual).toEqual(expected);
  })
});

describe('reverseGeoCode', () => {
  let url;
  let mockLat;
  let mockLng;

  beforeEach(() => {
    mockLat = 23;
    mockLng = 23;
    url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${mockLat},${mockLng}&key=${geoKey}`;
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(MOCK.mockReverseGeoInfo)
      })
    );
  });

  it('should be called with the correct params', async () => {
    let expected = url;

    await API.reverseGeoCode(mockLat, mockLng);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return the expected object', async () => {
    let expected = MOCK.mockReverseGeoInfo;

    let actual = await API.reverseGeoCode(mockLat, mockLng);

    expect(actual).toEqual(expected);
  });
});