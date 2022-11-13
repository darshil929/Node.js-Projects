// console.log('Starting')

// setTimeout(() => {
//     console.log('2 Second Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 Second Timer')
// }, 0)

// console.log('Stopping')

//const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//const url = 'http://api.weatherstack.com/current?access_key=49df7116204941beeff74d1f8529385c&query=37.8267,-122&units=m'


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//          //console.log( "It is currently " + response.body.current.temperature + " degrees. But it feels like " + response.body.current.feelslike + " degrees.")
//          console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
//     }
// })

// Geocoding
// Address -> Latitude/Longitude -> Weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9ubml0MzAxMiIsImEiOiJja3dqZ2VraHoxMmZ2MnRtZHhydDdtaHZiIn0.rw_ST19gG_YwOwxbRfhtzw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}