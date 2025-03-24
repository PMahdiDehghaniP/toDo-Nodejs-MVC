const Todo = require("../models/toDo");

const showTasks = (req, res) => {
  Todo.count({ where: { completed: true } }).then((completedTasksCount) => {
    Todo.findAll().then((todoData) => {
      res.render("index", {
        pageTitle: "Mahdi To Do List",
        todoData,
        completedTasksCount,
        unCompledtedTasksCount: todoData.length - completedTasksCount,
      });
    });
  });
};

module.exports = { showTasks };
