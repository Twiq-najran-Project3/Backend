const express=require('express');
const { getAllBooking, addBooking ,updateBooking } = require('../controllers/bookingController');
const { authentication } = require("../middlewares/authentication")
const { authorization } = require("../middlewares/authorization")


const bookingRouter=express.Router();


bookingRouter.get('/getAllBooking',getAllBooking)
bookingRouter.post('/addBooking',addBooking)
bookingRouter.put('/updateBooking',authentication,authorization("update"),updateBooking)
bookingRouter.put('/updateBooking',authentication,authorization("update"),)


module.exports={bookingRouter}
