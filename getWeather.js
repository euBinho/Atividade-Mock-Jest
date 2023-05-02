const axios = require('axios');

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`;

  const response = await axios.get(url);

  return response.data;
}

module.exports = getWeather;