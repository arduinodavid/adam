const winston = require('winston');
const express = require('express');
const app = express();

const stations = require('./routes/stations');
const stationzeros = require('./routes/stationzeros');
const lineage = require('./routes/lineage');
const getnextstations = require('./routes/getnextstations');
const {Station} = require('./models/station');

// add the startup modules, logging first
require('./startup/logging')();
require('./startup/db')();
require('./startup/prod')(app);
//require('./startup/routes')(app);
//require('./startup/config')();

app.use(express.json());
app.use('/api/stations', stations);
app.use('/api/stationzeros', stationzeros);
app.use('/api/lineage', lineage);
app.use('/api/getnextstations', getnextstations);

// port
const port  = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`listening on ${port}...`));

