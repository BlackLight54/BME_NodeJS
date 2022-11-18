// load part from DB to res.locals.part

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.local.part = objectrepository.parts[0];
        next();
    };
};