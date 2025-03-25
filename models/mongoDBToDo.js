const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const mongoDBToDoModel = mongoose.model("ToDo", toDoSchema);

module.exports = mongoDBToDoModel;
