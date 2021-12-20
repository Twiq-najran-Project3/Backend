const express = require("express");
const { userRouter } = require("./routes/userRouter");
const { roleRouter } = require("./routes/roleRouter");
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
const { eventRouter } = require("./routes/eventRouter");

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server lisining in PORT ${PORT}`);
});
