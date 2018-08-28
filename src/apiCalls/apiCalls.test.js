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