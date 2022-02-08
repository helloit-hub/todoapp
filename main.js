const express = require("express");

const app = express();

app.get("/todos", require("./routes/todo"));

app.listen(5000, () => {
  "Server Up";
});
