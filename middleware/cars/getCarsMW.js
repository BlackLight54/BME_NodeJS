// load all cars from DB to res.locals.cars

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.cars = objectrepository.cars;

        next();
    };
};