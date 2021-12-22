const express=require('express');
const { getUserByID , rigester, login, } = require('../controllers/userController');
const { authentication } = require("../middlewares/authentication")
const { authorization } = require("../middlewares/authorization")


const userRouter=express.Router();


userRouter.get('/:id',authentication,getUserByID)
userRouter.post('/rigester',rigester)
userRouter.post('/login',login)







module.exports={userRouter}