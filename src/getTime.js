const axios = require('axios');
const baseURL = 'http://api.timezonedb.com/v2.1/get-time-zone';
const API_KEY = process.env.TIMEZONEDB_API_KEY;

async function getTime({ lat = null, lng = null }) {
  const endPoint = `${baseURL}?by=position&key=${API_KEY}&lat=${lat}&lng=${lng}&format=json`;

  try {
    const response = await axios.get(endPoint);
    const data = await response.data;

    return data;
  } catch (ex) {
    console.log(ex);
  }

}


module.exports = getTime;
