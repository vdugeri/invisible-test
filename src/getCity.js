const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
const axios = require('axios');
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

async function getCity({ postalCode = null, clientUrl = 'http://localhost' }) {
    const endPoint = `${baseUrl}?address=${postalCode}&type=json&key=${API_KEY}`;
    const response = await axios.get(endPoint);
    const data = response.data

    return data.results[0].address_components[5].long_name

}

module.exports = getCity;

