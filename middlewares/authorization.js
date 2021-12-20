const authorization = (str)=>{

    // middleware as a closure function
    return (req,res,next)=>{
  
      // save req.token inside a variable
      const token = req.token;
  
      // check if the token includes the right permission to continue
      if(token.permissions.includes(str)){
  
        // if the permission is there, go to next function
        next()
      }else {
        console.log("wrong permission")
        res.status(403).json("forbidden")
      }
    }
  }



  module.exports={
    authorization
  }