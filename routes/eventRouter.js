const express=require('express');
const { authorization }=require('../middlewares/authorization')
const { authentication }=require('../middlewares/authentication')

const{getAllEvent,addEvent,updateEvent,addComment}=require('../controllers/eventController')
const eventRouter=express.Router();

//  -------------------------------
//            add EventsBy Admin
//  -------------------------------
module.exports = { getAllEvent, addEvent, };

eventRouter.get('/getAllEvent',getAllEvent)
eventRouter.post('/addEvent',authentication,authorization("create"),addEvent)//authorization(permitions(create))
eventRouter.put('/updateEvent/:id',authentication,authorization("update"),updateEvent)//authorization(permitions(create))
eventRouter.post('/addComment',addComment)


module.exports={eventRouter}