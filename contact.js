const express = require('express');



const routes = express.Router();
const contact_us = require('./controllers/contactus');

routes.get('/contact-us',contact_us.contactus);

module.exports= routes;
