// from https://github.com/VITMAV42/mintahazi2019tavasz
// if the user is authenticated -> next()
// else -> redirect to "/"

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.session.loggedIn === 'undefined' || req.session.loggedIn !== true) {
            return res.redirect('/');
        }

        next();
    };
};