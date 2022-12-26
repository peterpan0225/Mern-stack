const { connect, disconnect } = require("../config/db.config");
const { Task } = require("../model/task.model");
const logger = require("../logger/api.logger");

class TaskRepository {
  constructor() {
    connect();
  }

  async getTasks() {
    const tasks = await Task.find({});
    console.log("tasks:::", tasks);
    return tasks;
  }

  async createTask(task) {
    let data = {};
    try {
      data = await Task.create(task);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateTask(task) {
    console.log("taskkkkk:::::::::", task);
    let data = {};
    try {
      data = await Task.updateOne(
        { _id: task._id },
        { task: task.task, assignee: task.assignee, status: task.status }
      );
      console.log("updated data::::::::::", data);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteTask(taskId) {
    let data = {};
    try {
      data = await Task.deleteOne({ _id: taskId });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new TaskRepository();