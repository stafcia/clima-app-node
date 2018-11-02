const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=14393ee9c3fbd4d4fc621ed4e1e4ac7e`)
    if (resp.data.cod == '400') {
        throw new Error(`No hay resultados para la coordenada ${lat},${lng}`);
    }
    return temp = resp.data.main.temp;
}

module.exports = {
    getClima
}