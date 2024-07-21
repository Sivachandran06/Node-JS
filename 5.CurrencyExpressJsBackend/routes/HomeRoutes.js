const express = require("express");
const { getHome, getDetails, createUser } = require("../Controlers/Home.controlers");
const { validateUserCreationMiddleWare } = require("../Middleware/UserValidataion/UserValidationMiddleWare");
const routes = express.Router();

routes.get("/", getHome);

routes.get("/getDetails",getDetails );

routes.post("/createUser", validateUserCreationMiddleWare,createUser);

module.exports = routes;