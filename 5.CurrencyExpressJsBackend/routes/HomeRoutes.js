const express = require("express");
const { getHome, getDetails } = require("../Controlers/Home.controlers");
const routes = express.Router();

routes.get("/", getHome);

routes.get("/getDetails",getDetails );

module.exports = routes;