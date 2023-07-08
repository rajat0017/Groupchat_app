const express = require('express');

const fs = require("fs");
const path = require('path');
const routes = express.Router();

routes.get('/message', (req, res, next) => {
    fs.readFile('messages.txt',(err,data)=>{
        if(err){
            
            data='start a Chat';
        }
        
        
        
    });
    res.sendFile(path.join(__dirname,'views','message.html'));
})

module.exports= routes;