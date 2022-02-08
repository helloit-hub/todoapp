const model = require("../config/db");

/**
 *
 * @param {*} req
 * @param {*} res
 * @description Get all Todo Lists
 */
const getAllTodos = async (req, res) => {
  try {
    const response = await model.find();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = {
      title: req.body.title,
      description: req.body.description,
    };
    const response = await model.create(todo);
    const todoId = response._id;
    res.json({ message: `Todo id : ${todoId} has been created successfully` });
  } catch (error) {
    res.json(error.message);
  }
};
const updateTodo = async (req, res) => {
  try {
    const todoId = { id: req.params.id };
    const todo = {
      title: req.body.title,
      description: req.body.description,
    };
    (await model.updateOne(todoId, todo))
      ? res.json({ message: `ID : ${todoId.id} has been Successfully Updated` })
      : res.json({ message: "Not able to Update" });
  } catch (error) {
    res.json(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = { id: req.params.id };
    await model.deleteOne(todoId);
    res.json({ message: `ID : ${todoId.id} has Been Deleted` });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
