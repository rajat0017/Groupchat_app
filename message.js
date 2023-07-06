const express = require('express');

const fs = require("fs");
const routes = express.Router();

routes.get('/message', (req, res, next) => {
    fs.readFile('messages.txt',(err,data)=>{
        if(err){
            data='start a Chat';
        }
        res.send(`${data}<form action ="/msg" method="POST"  onSubmit="document.getElementById('username').value =localStorage.getItem('username')"><input type="hidden" name="username" id="username"><input type = "text" name = "message" id = "message" ><button type="submit">Send</button></form >`)
    });
    
})

module.exports= routes;