const Todo = require("../models/toDo");

const showTasks = (req, res) => {
  Todo.fetchAll().then((data) => {
    const completedTasksCount = Todo.getCompletedTasksCount(data);
    const unCompledtedTasksCount = Todo.getUnCompletedTasksCount(data);
    res.render("index", {
      pageTitle: "Mahdi To Do List",
      todoData: data,
      completedTasksCount,
      unCompledtedTasksCount,
    });
  });
};
module.exports = { showTasks };
