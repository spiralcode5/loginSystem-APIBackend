const mongoose = require("mongoose");

const custSchema = mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    projname: {type: String, required: true},
    projdate: {type: Date, required: true},
    DB_create_date: {type: Date, default: Date.now()},
    DB_update_date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("Customer",custSchema);