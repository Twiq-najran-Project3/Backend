const express=require('express');
const { getUserByID , getAllBooking , rigester, login } = require('../controllers/userController');
const { authentication } = require("../middlewares/authentication")
const { authorization } = require("../middlewares/authorization")


const userRouter=express.Router();



userRouter.get('/:id',authentication,getUserByID)
userRouter.post('/rigester',rigester)
userRouter.post('/login',login)
// userRouter.get('/getAllBooking',getAllBooking)
// userRouter.post('/addBooking',addBooking)






module.exports={userRouter}