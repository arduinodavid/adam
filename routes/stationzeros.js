const express = require('express');
const router = express.Router();
const {Station} = require('../models/station');

router.get('/', async (req, res) => {
   const stations =  await Station.find({stationLevel: 0});
   res.send(stations);
});

module.exports = router;