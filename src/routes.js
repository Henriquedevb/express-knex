const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/user.controller");

routes.get("/users", UserController.index);

module.exports = routes;
