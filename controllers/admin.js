const Todo = require("../models/toDo");
const { v4: uuidv4 } = require("uuid");
const addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  const taskId = uuidv4();
  const newTodo = new Todo(taskId, req.body.todo);
  newTodo.save((err) => {
    if (!err) return res.redirect("/");
    else {
      res.redirect("/");
      console.log(err);
    }
  });
};
const deleteToDoTask = (req, res) => {
  const taskId = req.params.id;
  Todo.deleteTask(taskId, (err) => {
    if (!err) res.redirect("/");
    else {
      res.redirect("/");
      console.log(err);
    }
  });
};

const doTask = (req, res) => {
  const taskId = req.params.id;
  Todo.changeTaskStatusToDone(taskId, (err) => {
    if (!err) res.redirect("/");
    else {
      res.redirect("/");
      console.log(err);
    }
  });
};
module.exports = {
  addTodo,
  deleteToDoTask,
  doTask,
};
