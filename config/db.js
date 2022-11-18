const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cars', { useNewUrlParser: true });

module.exports = mongoose;