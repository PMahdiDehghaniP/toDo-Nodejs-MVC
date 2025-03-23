const express = require("express");

const { addTodo, deleteToDoTask, doTask } = require("../controllers/admin");

const router = express.Router();

router.post("/add-todo", addTodo);

router.get("/delete-task/:id", deleteToDoTask);
router.get("/complete-task/:id", doTask);

module.exports = router;
