const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=267fa1b1565b12151d2ba3f7d687b516&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}