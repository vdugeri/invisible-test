require('dotenv').config();
const getLatLng = require('./src/getLatLng');
const getTime = require('./src/getTime');
const getWeather = require('./src/getWeather');


async function run() {
    try {
        const location = await getLatLng({ postalCode: '90003' });
        const time = await getTime(location);
        const weatherReport = await getWeather(location);
        const weather = weatherReport.weather[0];
        const { main } = weatherReport;

        const results = {
            time: time.formatted,
            current_weather: { weather, details: main }
        }

        console.log(results)
    } catch (ex) {
        console.log(ex.message);
    }

}


run();


