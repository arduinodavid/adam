const express = require('express');
const router = express.Router();
const {Station} = require('../models/station');

router.get('/:id', async (req, res) => {
    const station =  await Station.find({stationUID: req.params.id});

   if (!station) res.status(404).send('Station not found');
   else res.send(station);
});

module.exports = router;