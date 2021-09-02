const express = require('express');
app = express();


// Routers
let router = require('./routes/index')

app.use('/', router) // index router

app.listen(process.env.PORT || 8080);