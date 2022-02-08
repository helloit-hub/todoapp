const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo");

const router = require("express").Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
