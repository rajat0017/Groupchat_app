const express = require('express');

const routes= express.Router();

const path = require('path');

routes.get('/login', (req, res, next) => {

    res.sendFile(path.join(__dirname,'views','login.html'));

})

module.exports= routes;