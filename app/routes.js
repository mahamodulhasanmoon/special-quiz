const express = require('express');
const routes = express.Router();


// check health routes
routes.get("/", (_req, res) => {
    res.status(200).json({ 
      status:200,
       message: "success" 
      });
  });

module.exports = routes