const middleware = require('./middleware');
const express = require('express');
const routes = require('./routes');


const app = express();
app.use(middleware)
app.use(routes)


module.exports = app;