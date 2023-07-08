const express = require('express');

const path= require('path');

const routes = express.Router();

routes.get('/contact-us', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','contact.html'))
})

module.exports= routes;
