const express=require('express');
const { getUserByID, rigester, login } = require('../controllers/userController');


const userRouter=express.Router();



userRouter.get('/:id',getUserByID)
userRouter.post('/rigester',rigester)
userRouter.post('/login',login)




module.exports={userRouter}