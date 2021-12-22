const express=require('express');
const { getAllComments, addComment ,updateComment } = require('../controllers/CommentController');
const { authentication } = require("../middlewares/authentication")
const { authorization } = require("../middlewares/authorization")


const commentRouter=express.Router();


commentRouter.get('/getAllComment',getAllComments)
commentRouter.post('/addComment',addComment)
commentRouter.put('/updateComment',authentication,authorization("update"),updateComment)
commentRouter.put('/updateComment',authentication,authorization("update"),)


module.exports={commentRouter}
