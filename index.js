require('dotenv').config();
const getCity = require('./src/getCity');


async function run() {
    response = await getCity({ postalCode: '90210' });

    console.log(response);
}


run();


