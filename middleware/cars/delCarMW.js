// removes car from DB
// redirects to "/cars" after

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.car === 'undefined') {
            return next();
        }

        res.locals.car.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/cars');
        });
    };
};