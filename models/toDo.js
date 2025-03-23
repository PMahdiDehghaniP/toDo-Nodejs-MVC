const fs = require("fs");
const { rootDir } = require("../utils/path");
const path = require("path");

const dataJsonFilePath = path.join(rootDir, "data", "data.json");
class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
  save(callback) {
    Todo.fetchAll()
      .then((data) => {
        console.log(data);
        data.push(this);
        fs.writeFile(dataJsonFilePath, JSON.stringify(data), (err) => {
          if (err) return callback(err);
          else return callback([]);
        });
      })
      .catch((error) => {
        callback(error);
      });
  }
  static fetchAll() {
    return fs.promises
      .readFile(dataJsonFilePath, "utf-8")
      .then((data) => {
        return data ? JSON.parse(data) : [];
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
  static deleteTask(id, callback) {
    Todo.fetchAll().then((data) => {
      const updatedData = data.filter((task) => task.id !== id);
      fs.writeFile(dataJsonFilePath, JSON.stringify(updatedData), (err) => {
        callback(err);
      });
    });
  }
  static changeTaskStatusToDone(id, callback) {
    Todo.fetchAll().then((data) => {
      const updatedData = data.map((task) => {
        if (task.id === id) {
          task.completed = true;
        }
        return task;
      });
      fs.writeFile(dataJsonFilePath, JSON.stringify(updatedData), (err) => {
        callback(err);
      });
    });
  }
  static getCompletedTasksCount(data) {
    return data.filter((task) => task.completed === true).length;
  }
  static getUnCompletedTasksCount(data) {
    return data.filter((task) => task.completed === false).length;
  }
}

module.exports = Todo;
