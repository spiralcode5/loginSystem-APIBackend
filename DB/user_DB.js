const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    DB_create_date: {type: Date, default: Date.now()},
    DB_update_date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("User",userSchema);