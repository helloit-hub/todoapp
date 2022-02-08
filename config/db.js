const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});

const model = mongoose.model("todos", todoModel);

module.exports = model;
