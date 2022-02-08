const express = require("express");
const connectDB = require("./controller/db");
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/todos", require("./routes/todo"));

app.listen(5000, () => {
  console.log("Server Up");
});
