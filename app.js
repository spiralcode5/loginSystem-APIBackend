const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const app = express();

const user = require("./route/user");
const cust = require("./route/cust");

app.use(express.json());
app.get("/", (req,res) => {
    res.send("Home Page");
});

app.use("/user",user);
app.use("/customer",cust);

app.listen(process.env.PORT || 5000);
mongoose.connect(process.env.DB, {
    useNewURLParser: true, useUnifiedTopology:true} , () => {
        console.log("MongoDB connected Successfully");
});
