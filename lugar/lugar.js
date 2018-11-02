const axios = require('axios');
const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la dirección ${direccion}`);
    }

    let location = resp.data.results[0];
    return {
        direccion: location.address_components[0].long_name,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
}


module.exports = {
    getLugarLatLng
}