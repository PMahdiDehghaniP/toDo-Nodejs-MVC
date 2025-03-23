const Todo = require("../models/toDo");
const addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  const taskId = Math.floor(Math.random() * 1000);
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
  const taskId = Number(req.params.id);
  Todo.deleteTask(taskId, (err) => {
    if (!err) res.redirect("/");
    else {
      res.redirect("/");
      console.log(err);
    }
  });
};

const doTask = (req, res) => {
  const taskId = Number(req.params.id);
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
