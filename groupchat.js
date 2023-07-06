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

app.listen(3000);