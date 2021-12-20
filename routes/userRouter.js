const express=require('express');
const { getUserByID , getAllBooking , rigester, login } = require('../controllers/userController');


const userRouter=express.Router();



userRouter.get('/:id',getUserByID)
userRouter.post('/rigester',rigester)
userRouter.post('/login',login)
// userRouter.get('/getAllBooking',getAllBooking)
// userRouter.post('/addBooking',addBooking)






module.exports={userRouter}