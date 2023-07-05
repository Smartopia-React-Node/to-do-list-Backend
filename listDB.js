// require("dotenv").config();
const connectDB = require("./db/connect");
const List = require("./models/list");

const ListJson = require("./list.json");

const start = async () => {
    try {
        await connectDB();
        await List.deleteMany();
        await List.create(ListJson);
        console.log("JSON added to DB");
    } catch (error) {
        console.log(error);
    }
};
start();