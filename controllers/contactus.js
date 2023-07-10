const path= require('path');

exports.contactus= (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
};