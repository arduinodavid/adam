const express = require('express');
const router = express.Router();
const {Station} = require('../models/station');

router.get('/:id', async (req, res) => {
   const stations =  await Station.find({parentID: req.params.id, stationType: "MAIN"});
   res.send(stations);
});

module.exports = router;