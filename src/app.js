const express = require("express");
const app = express();
const routes = require('./routes/main');

const hbs = require("hbs");
const mongoose = require("mongoose");

//this app.use takes callback to routes/main.js and then return output
app.use("",routes);
app.use("/static", express.static("public"));


//db connection
mongoose.connect("mongodb: //localhost/Website_page",() => {
    console.log ("db connected")
});


//set template engine
app.set("view engine","hbs");
// set the location of the folder- views
app.set("views","views");
//set location of partial file.
hbs.registerPartials("views/partials");



app.listen(process.env.PORT | 5556,() =>{
    console.log("server started successfully")
});
