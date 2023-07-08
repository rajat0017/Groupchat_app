const express = require("express");

const app = express();

const bodyparser = require("body-parser");
const { error } = require("console");
app.use(bodyparser.urlencoded({ extended: true }));

const login = require('./login');

app.use(login);

const message = require('./message');

app.use(message);

const Chats= require('./chats');

app.use(Chats);

const contact = require('./contact.js');
app.use(contact);

const response = require('./response.js');
app.use(response)

const er= require('./404.js');
app.use(er);



app.listen(3000);