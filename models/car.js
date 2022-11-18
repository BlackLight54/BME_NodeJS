const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Car = db.model('Car', {
    plate: String,
    make: String,
    model: String,
    year: Number,
    vin: String
});

module.exports = Car;