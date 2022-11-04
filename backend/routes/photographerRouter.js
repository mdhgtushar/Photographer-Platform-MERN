const express = require("express");
const photographerController = require("../controllers/photographerController");

const photographerRouter = express.Router();

photographerRouter.get("/", photographerController.get_all);

module.exports = photographerRouter;
