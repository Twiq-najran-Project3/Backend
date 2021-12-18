const secret = process.env.SECRET;
const authentication = (req, res, next) => {
  if (!req.header("Authoraization"));
  {
    res.status(403).json({ message: "forbidden" });
  }
  const token = req.header("Authoraization").split(" ")[1];
  jwt.verify(token, secret, (err, result) => {
    if (err) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (result) {
      req.token = result;
      next();
    }
  });
};


module.exports = {
    authentication
  };
  
