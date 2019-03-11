const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
const axios = require('axios');
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const getLatLng = async ({ postalCode = null, clientUrl = 'http://localhost' }) => {
  const endPoint = `${baseUrl}?address=${postalCode}&type=json&key=${API_KEY}`;
  try {
    const response = await axios.get(endPoint);
    const data = response.data

    return data.results[0].geometry.location
  } catch (ex) {
    console.log(ex.message);
  }
}

module.exports = getLatLng;

