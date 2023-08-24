
const colors = require('colors');
const dbConnect = require('./db/db.js')
const express = require('express');
const app = require('./app/app.js');
require('dotenv').config();
const port =process.env.PORT || 5000

// mongodb connections
const dbURL = process.env.DB_URL


dbConnect(dbURL)
.then(()=>{
    console.log("db Connection Successfull".bgGreen.bgCyan)
    app.listen(port, ()=>console.log(`listening on port http://localhost:${port}`))
})
.catch(error=>console.log(error.message))