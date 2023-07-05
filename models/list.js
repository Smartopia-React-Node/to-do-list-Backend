const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    item: {
        type: String,
        required:true,
    }
});

module.exports = mongoose.model('List', listSchema);