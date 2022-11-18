// save to DB from res.locals.car

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const CarModel = requireOption(objectrepository, 'CarModel');
    return function (req, res, next) {
        if (
            typeof req.body.licenseplate === 'undefined' ||
            typeof req.body.make === 'undefined' ||
            typeof req.body.model === 'undefined' ||
            typeof req.body.vin === 'undefined' ||
            typeof req.body.year === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.car === 'undefined') {
            res.locals.car = new CarModel();
        }

        res.locals.car.plate = req.body.licenseplate;
        res.locals.car.make = req.body.make;
        res.locals.car.model = req.body.model;
        res.locals.car.vin = req.body.vin;
        res.locals.car.year = req.body.year;

        res.locals.car.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/cars');
        });
    };
};