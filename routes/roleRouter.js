const express=require('express');

const{CreateRole}=require('../controllers/roleController')
const roleRouter=express.Router();

 
roleRouter.post('/createRole',CreateRole)


module.exports={roleRouter}