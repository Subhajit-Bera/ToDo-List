const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose"); //For database
const _ = require("lodash");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
