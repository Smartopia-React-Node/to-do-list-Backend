const mongoose = require("mongoose");

const uri = "mongodb+srv://rohit:cwMbigS8u3Xb4kgD@rohitapi.to6xx9s.mongodb.net/RohitAPI?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("db connected");
    return mongoose.connect(uri);
};

module.exports = connectDB;


