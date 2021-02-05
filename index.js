'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const config = require('./config');
const timeSlotRoutes = require('./routes/timeslot-routes');

const app = express();

app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use('/api', timeSlotRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:'+ config.port))