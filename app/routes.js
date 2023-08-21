const express = require('express');
const app = require('./app');
const specialQuizRouter = require('../modules/specialQuizes/specialQuiz.routes');
const routes = express.Router();


app.use(specialQuizRouter)
// check health routes
routes.get("/health", (_req, res) => {
    res.status(200).json({ 
      status:200,
       message: "success" 
      });
  });

module.exports = routes