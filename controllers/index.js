const Todo = require("../models/toDo");

const showTasks = async (req, res) => {
  try {
    const completedTasksCount = await Todo.count({
      where: { completed: true },
    });
    const todoData = await Todo.findAll();
    res.render("index", {
      pageTitle: "Mahdi To Do List",
      todoData,
      completedTasksCount,
      unCompledtedTasksCount: todoData.length - completedTasksCount,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { showTasks };
