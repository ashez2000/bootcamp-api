require('dotenv').config() // ? why this is required
const geocoder = require('node-geocoder')

const con = {
    provider: 'mapquest',
    httpAdapter: 'https',
    apiKey: process.env.GEO_KEY,
    formatter: null
}

module.exports = geocoder(con)
