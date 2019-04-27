const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

require('./models/Personas');
mongoose.connect(keys.MONGO_URL);
app.use(bodyParser.json());
//bodyParser trebuie sa fie tot timpul mai inainte de require, pentru ca altfel nu face POST
//const pr = require('./routes/personasRoutes');
//pr(app);
// pr hace referencia a una funcion, la hago una funcion corta=>
require('./routes/personasRoutes')(app);



app.listen(process.env.PORT || 5000);

