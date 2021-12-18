const mongoose =require("mongoose")
require("dotenv").config();

// ----------------------------
//           Options
// ----------------------------

// const options ={
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopolgy:true,
//     useFindAndModify:true
// };
// ---------------------------------


// ---------------------------------
//       mongoose connections
// ---------------------------------
mongoose.connect(process.env.DB_URI,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Database conected");
})
// ---------------------------------