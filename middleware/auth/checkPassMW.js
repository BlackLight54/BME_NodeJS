/**
 * from https://github.com/VITMAV42/mintahazi2019tavasz
 * 
 * Check the password in the form (from POST), if it's the right one, create a session for the user and redirect to /nagymama
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'password') {
            req.session.loggedIn = true;
            return req.session.save(err => res.redirect('/cars'));
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};