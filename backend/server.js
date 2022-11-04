const express = require("express");
const photographerRouter = require("./routes/photographerRouter");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/photographer", photographerRouter);

mongoose.connect("mongodb://localhost:27017/photographer-mern", (err) => {
  !err
    ? console.log("Mongodb connected")
    : console.log("error DB not connected");
});
app.listen(5000, (err) => {
  !err
    ? console.log("App Running on port 5000")
    : console.log("Error: App not running 500");
});
