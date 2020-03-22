// security thing
const helmet = require('helmet');
const compression = require('compression');

module.exports = function(app) {
    app.use(helmet());
    app.disable('x-powered-by');
    app.use(compression());
}