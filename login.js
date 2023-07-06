const express = require('express');

const routes= express.Router();


routes.get('/login', (req, res, next) => {

    res.send('<form onSubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/message" method="get"><input id="username" type="text" name="title" ><br><button type="submit">Login</button></form>')

})

module.exports= routes;