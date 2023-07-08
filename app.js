// require("dotenv").config();

const List = require("./models/list");
const connectDB = require("./db/connect");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>API CONNECTED</h1>");
});
app.get("/api/list", async (req, res) => {
  try {
    const myData = await List.find();
    res.status(200).json(myData);
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/list", async (req, res) => {
  const newData = new List(req.body);
  try {
    const data = await newData.save(); //returns object|json
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});
app.delete("/api/list/del/:id", async (req, res) => {
  try {
    const data = await List.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

const start = async () => {
  try {
    app.listen(3000, async () => {
      console.log("server running");
    });
    await connectDB();
  } catch (error) {
    console.log(error);
  }
};
start();

/* OLD VERSION FOR INSERT
    try {
        const newData = (req.query);
        console.log(req.query);
        await List.create(newData);
        res.status(200).send("data stored");
    } catch (error) {
        console.log(error);
    }
*/
