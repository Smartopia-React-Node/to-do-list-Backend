// require("dotenv").config();

const List = require("./models/list");
const connectDB = require("./db/connect")

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/list", async(req, res) => {
    try {
        const myData = await List.find();
        res.status(200).json(myData);   
    } catch (error) {
        console.log(error);
    }
});
app.post("/list", async(req, res) => {
    try {
        const newData = (req.query);
        List.create(newData);
        res.status(200).send("data stored");
    } catch (error) {
        console.log(error);
    }
});
app.delete("/list/del/:id", async(req, res) => {
    try {
        const item = await List.findByIdAndDelete(req.params.id);
        res.status(200).send("data deleted");
    } catch (error) {
        console.log(error);
    }
})

const start = async () => {
    try {
        app.listen(3000, () => {
            console.log("server running");
        });
        await connectDB();
    } catch (error) {
        console.log(error);
    }
};
start();