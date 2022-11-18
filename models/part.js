const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Part = db.model('Part', {
    id: Number,
    name: String,
    number: String,
    price: Number,
    _usedIn: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }
});

module.exports = Part;