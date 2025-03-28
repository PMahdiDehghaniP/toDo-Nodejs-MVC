//MySQL
// const Todo = require("../models/toDo");
// const addTodo = async (req, res) => {
//   if (!req.body.todo) return res.redirect("/");
//   try {
//     await Todo.create({ text: req.body.todo });
//     res.redirect("/");
//   } catch (error) {
//     console.log(error);
//   }
// };
// const deleteToDoTask = async (req, res) => {
//   const taskId = Number(req.params.id);
//   try {
//     await Todo.destroy({ where: { id: taskId } });
//     res.redirect("/");
//   } catch (error) {
//     console.log(error);
//   }
// };

// const doTask = async (req, res) => {
//   const taskId = req.params.id;
//   try {
//     const selecedTask = await Todo.findByPk(taskId);
//     selecedTask.completed = !selecedTask.completed;
//     await selecedTask.save();
//     res.redirect("/");
//   } catch (error) {
//     console.log(error);
//   }
// };

//MongoDB
const mongoDBToDoModel = require("../models/mongoDBToDo");

const addTodo = async (req, res) => {
  try {
    if (!req.body.todo) return res.redirect("/");
    await mongoDBToDoModel.create({ text: req.body.todo });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteToDoTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    await mongoDBToDoModel.findByIdAndDelete(taskId);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const doTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    await mongoDBToDoModel.findByIdAndUpdate(taskId, { completed: true });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addTodo,
  deleteToDoTask,
  doTask,
};
