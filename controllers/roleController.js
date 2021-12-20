const {Role}=require('../models/roleModel')

// --------------------------
//         addRole
// --------------------------


const CreateRole = (req, res) => {
    const { role, permissions } = req.body;
     
    const newRole = new Role({
        role,
        permissions,
    });
  
    newRole
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).send("Role Created");
      })
      .catch((err) => {
        res.json(err.message);
      });
  };



  module.exports={CreateRole}