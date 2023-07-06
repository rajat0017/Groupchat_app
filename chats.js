const express = require('express');

const fs = require("fs");

const routes = express.Router();

routes.post('/msg', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("messages.txt",` ${req.body.username} : ${req.body.message}`,{flag:'a'},(err)=>{
        err ? console.log(err) : res.redirect("/message")
    } )
    
    
})

module.exports=routes;