// load car from DB to res.locals.car

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const CarModel = requireOption(objectrepository, 'CarModel');
    return function (req, res, next) {
        res.locals.car = objectrepository.cars[0];
        next();
    };
};