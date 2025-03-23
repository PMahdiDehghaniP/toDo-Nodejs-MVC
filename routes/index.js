const express = require("express");
const { showTasks } = require("../controllers");

const router = express.Router();

router.get("/", showTasks);

module.exports = { indexRouter: router };
