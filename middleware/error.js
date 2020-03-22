const winston = require('winston');

// only the express context...in the below
module.exports = function(err, req, res, next) {
    winston.error(err.message, err);
    // error
    // warn
    // info
    // verbose
    // debig
    // silly
    res.status(500).send('Oops. Internal server error. email David');
}