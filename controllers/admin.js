const Todo = require("../models/toDo");
const addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  Todo.create({ text: req.body.todo }).then((result) => {
    res.redirect("/");
  });
};
const deleteToDoTask = (req, res) => {
  const taskId = Number(req.params.id);
  Todo.destroy({ where: { id: taskId } }).then((result) => {
    res.redirect("/");
  });
};

const doTask = (req, res) => {
  const taskId = req.params.id;
  Todo.findByPk(taskId)
    .then((task) => {
      task.completed = true;
      return task.save();
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = {
  addTodo,
  deleteToDoTask,
  doTask,
};
