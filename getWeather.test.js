const axios = require('axios');
const getWeather = require('./getWeather');

jest.mock('axios');

test('getWeather returns expected data', async () => {
  const city = 'London';
  const mockData = { main: { temp: 280 } };
  axios.get.mockResolvedValue({ data: mockData });

  const data = await getWeather(city);

  expect(data).toEqual(mockData);
});
