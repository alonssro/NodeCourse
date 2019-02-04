const axios = require('axios');

const getClima = async (lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b228afaa1f5d7b1297835430fb255b88`)


    return resp.data.main.temp;
}

module.exports = {
    getClima
}