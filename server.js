const express =require("express");
const { userRouter } = require("./routes/userRouter");
const bcrypt = require("bcrypt");


const app =express();

// -------------------------
//     connect Databse
// -------------------------
const db =require('./MangoDB/dbConnection')
// -------------------------
//      END connect Databse
// -------------------------

const cors =require("cors");

app.use(express.json())
app.use(cors())


// UserRouter 
app.use("/user",userRouter)

  







const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server lisining in PORT ${PORT}`);
})