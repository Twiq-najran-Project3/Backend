const express = require("express");
const { userRouter } = require("./routes/userRouter");
const { roleRouter } = require("./routes/roleRouter");
const { eventRouter } = require("./routes/eventRouter");
const { bookingRouter } = require("./routes/bookingRouter");
const { commentRouter } = require("./routes/commentRouter");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();

// -------------------------
//     connect Databse
// -------------------------
const db = require("./MangoDB/dbConnection");
// -------------------------
//      END connect Databse
// -------------------------

const cors = require("cors");

app.use(express.json());
app.use(cors());

// ---------------------------
//         userRouter
// ---------------------------
app.use("/user", userRouter);

// ---------------------------
//         roleRouter
// ---------------------------
app.use("/role", roleRouter);

// ---------------------------
//         eventRouter
// ---------------------------
app.use("/event", eventRouter);

// ---------------------------
//        bookingRoutert
// ---------------------------
app.use("/booking",bookingRouter);

// ---------------------------
//        commentRoutert
// ---------------------------
 app.use("/comment",commentRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server lisining in PORT ${PORT}`);
});