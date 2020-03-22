const express = require('express');
const router = express.Router();
const {Station} = require('../models/station');

router.get('/:id', async (req, res) => {
    let lineage = [];
    let parentID;

    var station =  await Station.findOne({stationUID: req.params.id});
    parentID = station.parentID;

    let mainCount = 1;
    let recCount = 1;

    lineage.push(station);

    while (parentID) {
        station =  await Station.findOne({stationUID: parentID});
        parentID = station.parentID;

        if ((req.query.type === 'MAIN') && (station.stationType === 'MAIN') && (station)) {
            lineage.push(station);
            mainCount += 1;
        }
        else if (station) {
            lineage.push(station);
            recCount += 1;
        }
    }

    res.status(200).send(lineage);

    if (req.query.type === 'MAIN') {
        console.log(`MAIN lineage length = ${mainCount}`);
    }
    else {
        console.log(`ALL lineage length = ${mainCount + recCount}`);
    }
    
});

module.exports = router;