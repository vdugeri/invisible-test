const axios = require('axios');
const baseURL = 'https://samples.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.OPEN_WEATHER_API_KEY

const getWeather = async ({ lat = null, lng = null }) => {
  const endpoint = `${baseURL}?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

  try {
    const response = await axios.get(endpoint);

    const data = await response.data;

    return data;
  } catch (ex) {
    console.log(ex.message);
  }
}

module.exports = getWeather;
