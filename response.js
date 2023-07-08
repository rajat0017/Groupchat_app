const express = require('express');

const routes= express.Router();

const path = require('path');

routes.get('/success', (req, res, next) => {

    res.sendFile(path.join(__dirname,'views','response.html'));

})

module.exports= routes;