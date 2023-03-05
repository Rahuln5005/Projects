const express = require("express");

const routes = express.Router();

//we can create multiple routes here.for example, gallery, about, etc 
routes.get("/", (req,res) => {
    res.render("index")
});

routes.get("/gallery", (req,res) => {
    res.render("gallery")
});


module.exports = routes;
