const secret = process.env.SECRET;
const jwt = require("jsonwebtoken")
const authentication = (req, res, next) => {
  if (!req.header("Authorization")){
    res.status(403).json({ message: "forbidden" });
    return
  }
  const token = req.header("Authorization").split(" ")[1];
  jwt.verify(token, secret, (err, result) => {
    if (err) {
      console.log(err)
      res.status(403).json({ message: "forbidden" });
      return
    }
    if (result) {
      console.log(result)
      req.token = result;
      next();
    }
  });
};


module.exports = {
    authentication
  };
  
