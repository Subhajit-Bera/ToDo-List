const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose"); //For database
const _ = require("lodash");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


//Connect with mongodb database.
mongoose.connect("mongodb://localhost:27017/toDolistDB");


const itemSchema = {
    name: String
};

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "This is your ToDoList"
})

const item2 = new Item({
    name: "Hit + for add new items"
})

const item3 = new Item({
    name: "<-- Hit this to delete an item"
})

const defaultItems = [item1, item2, item3];