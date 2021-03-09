const request = require('request')
const { response } = require('express')
const forecast = (lattitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0256d4e221ae4a7512471b0e1d8930b1&query=' + lattitude + ',' + longitude + '&nits=f'
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('unable to connect', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)

        } else {
            callback(undefined, `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degress and feels like ${body.current.feelslike} degrees out. `)

        }
    })


}
module.exports = forecast
