const express = require('express');

const stations = require('../routes/stations');

module.exports = function(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));

    // set up the routes
    app.use('/api/stations', stations);
    app.use(error);
};