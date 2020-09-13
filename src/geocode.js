const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYW1pdC0yMDAwIiwiYSI6ImNrZW14a3RzZjBoeGUzMXQ4Yzl3OGQ3dHIifQ.gwvzla-Lw88u4ekpvsoZ_w'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('error, unable to connect', undefined)
        } else if (body.features.length === 0) {
            callback("Enter Valid Location", undefined);
        }
        else {
            callback(undefined, {
                lattitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })


        }
    })
}
module.exports = geocode